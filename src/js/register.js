
        function togglePasswordRegister() {
            const passwordInput = document.getElementById('password-register');
            const eyeShow = document.getElementById('eye-show-register');
            const eyeHide = document.getElementById('eye-hide-register');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeShow.classList.add('hidden');
                eyeHide.classList.remove('hidden');
            } else {
                passwordInput.type = 'password';
                eyeShow.classList.remove('hidden');
                eyeHide.classList.add('hidden');
            }
        }
