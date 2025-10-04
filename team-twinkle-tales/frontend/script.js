
        document.addEventListener('DOMContentLoaded', function() {
            const randomNameBtn = document.getElementById('randomName');
            const usernameInput = document.getElementById('username');
            
            // مجموعة الأسماء العشوائية :cite[1]
            const randomNames = [
                'البطل المعاصر',
                'الفارس الشجاع',
                'المغامر الفضائي',
                'حارس المجرة',
                'بطل النجوم',
                'الرائد الشجاع',
                'مستكشف الكون',
                'فاتح المجرات',
                'حارس الأحلام',
                'بطل الغروب'
            ];
            
            // زر اختيار اسم عشوائي :cite[6]
            randomNameBtn.addEventListener('click', function() {
                const randomIndex = Math.floor(Math.random() * randomNames.length);
                usernameInput.value = randomNames[randomIndex];
                
                // تأثير مرئي عند اختيار اسم عشوائي
                randomNameBtn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    randomNameBtn.style.transform = '';
                }, 150);
            });
            
            // معالجة النموذج
            const loginForm = document.querySelector('.login-form');
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const username = usernameInput.value.trim();
                
                if (username === '') {
                    alert('يرجى اختيار اسم للمغامرة!');
                    return;
                }
                
                // تأثير تحميل
                const submitBtn = loginForm.querySelector('.btn-primary');
                submitBtn.textContent = 'جاري التحضير للمغامرة...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert(`مرحباً ${username}! استعد لمغامرتك الفضائية!`);
                    // هنا يمكن إضافة التحويل للصفحة التالية
                    // window.location.href = 'game.html';
                    
                    submitBtn.textContent = 'ابدأ المغامرة';
                    submitBtn.disabled = false;
                }, 2000);
            });
            
            // تأثيرات تفاعلية إضافية
            const loginBox = document.querySelector('.login-box');
            document.addEventListener('mousemove', (e) => {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
                loginBox.style.transform = `translateZ(30px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            });
            
            document.addEventListener('mouseleave', () => {
                loginBox.style.transform = 'translateZ(20px)';
            });
        });
    
    