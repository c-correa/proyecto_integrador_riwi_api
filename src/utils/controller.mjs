

export function controller(cb) {
	return (req, res) => {
		cb(req, res).catch((error) => {
			if (error) {
				res.status(500).send({ name: "ServerError", message: "server error" });
			}

			const name = error.name;
			const message = error.message;
			const stack = error.stack;
			const status = error.status;

			if (status && status >= 300 && status < 600) {
				res.status(status).send({ name, message, stack });
			} else {
				res.status(500).send({
					name: "ServerError",
					message: error.message || "server error",
					stack,
				});
			}
		});
	};
}