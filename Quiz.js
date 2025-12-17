// Quiz questions
        const questions = [
            {
                image: "Pictures/Quiz1.jpg",
                question: "How do you prefer to spend your free time?",
                options: [
                    { text: "Reading a book or relaxing with a warm drink.", place: "domens" },
                    { text: "Drawing, sketching, or designing.", place: "create" },
                    { text: "Crafting — knitting, macramé, DIY projects.", place: "create" },
                    { text: "Just walking around or exploring randomly.", place: "hygge" }
                ]
            },
            {
                image: "Pictures/Quiz2.jpg",
                question: "What kind of atmosphere appeals to you most?",
                options: [
                    { text: "Quiet and cozy with soft lighting.", place: "domens" },
                    { text: "Creative and colorful with hands-on activities.", place: "create" },
                    { text: "Modern and Instagram-worthy.", place: "hygge" },
                    { text: "Warm and welcoming with friendly vibes.", place: "domens" }
                ]
            },
            {
                image: "Pictures/Quiz3.jpg",
                question: "How do you like to socialize?",
                options: [
                    { text: "One-on-one deep conversations.", place: "domens" },
                    { text: "Group activities where we make something together.", place: "create" },
                    { text: "Casual hangouts in a trendy spot.", place: "hygge" },
                    { text: "I prefer solo time to recharge.", place: "domens" }
                ]
            },
            {
                image: "Pictures/Quiz4.jpg",
                question: "What's your ideal way to spend a rainy afternoon?",
                options: [
                    { text: "Sipping coffee and journaling.", place: "domens" },
                    { text: "Painting or working on a craft project.", place: "create" },
                    { text: "Exploring new places in the city.", place: "hygge" },
                    { text: "Browsing a cozy shop or bookstore.", place: "hygge" }
                ]
            },
            {
                image: "Pictures/Quiz5.jpg",
                question: "What type of experience are you looking for?",
                options: [
                    { text: "Something peaceful and calming.", place: "domens" },
                    { text: "Something creative and hands-on.", place: "create" },
                    { text: "Something aesthetic and memorable.", place: "hygge" },
                    { text: "Something unique and inspiring.", place: "create" }
                ]
            }
        ];

        // Place information
        const places = {
            domens: {
                name: "Domen's Coffee",
                description: "A cozy coffee shop perfect for relaxation, warm drinks, and quiet conversations. The ideal spot for peaceful moments and creative inspiration.",
                image: "Pictures/Domen Home.jpg",
                link: "Domen's.html"
            },
            create: {
                name: "Create Aarhus",
                description: "A creative workshop space where you can make candles, paint ceramics, and explore your artistic side. Perfect for hands-on experiences and crafting memories.",
                image: "Pictures/Create Aarhus Home.jpg",
                link: "CreateAarhus.html"
            },
            hygge: {
                name: "Creating Moments",
                description: "Because you enjoy creating things, we recommend Creating Memories for its cozy workshops in knitting, macramé, and other hands-on crafts.",
                image: "Pictures/Creating Moments Home.jpg",
                link: "CreatingMemories.html"
            }
        };

        let currentQuestion = 0;
        let answers = { domens: 0, create: 0, hygge: 0 };
        let selectedOption = null;

        // Initialize quiz
        function initQuiz() {
            showQuestion();
        }

        // Show current question
        function showQuestion() {
            const question = questions[currentQuestion];
            document.getElementById('progress').textContent = `${currentQuestion + 1}/5`;
            document.getElementById('questionImage').src = question.image;
            document.getElementById('questionText').textContent = question.question;
            
            const optionsContainer = document.getElementById('optionsContainer');
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                optionDiv.innerHTML = `
                    <div class="radio-circle"></div>
                    <div class="option-text">${option.text}</div>
                `;
                optionDiv.onclick = () => selectOption(index, option.place);
                optionsContainer.appendChild(optionDiv);
            });
            
            selectedOption = null;
            document.getElementById('nextBtn').disabled = true;
        }

        // Select an option
        function selectOption(index, place) {
            const options = document.querySelectorAll('.option');
            options.forEach(opt => opt.classList.remove('selected'));
            options[index].classList.add('selected');
            
            selectedOption = place;
            document.getElementById('nextBtn').disabled = false;
        }

        // Next button handler
        document.getElementById('nextBtn').onclick = function() {
            if (selectedOption) {
                answers[selectedOption]++;
                currentQuestion++;
                
                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {
                    showResult();
                }
            }
        };

        // Show result
        function showResult() {
            const maxScore = Math.max(answers.domens, answers.create, answers.hygge);
            let resultPlace;
            
            if (answers.domens === maxScore) {
                resultPlace = 'domens';
            } else if (answers.create === maxScore) {
                resultPlace = 'create';
            } else {
                resultPlace = 'hygge';
            }
            
            const place = places[resultPlace];
            
            document.getElementById('questionCard').classList.add('hidden');
            document.getElementById('resultCard').classList.remove('hidden');
            
            // Create image with link
            const resultImageContainer = document.getElementById('resultImage').parentElement;
            const imageElement = document.getElementById('resultImage');
            
            // Wrap image in link
            imageElement.src = place.image;
            imageElement.style.cursor = 'pointer';
            imageElement.onclick = function() {
                window.location.href = place.link;
            };
            
            document.getElementById('resultPlace').textContent = place.name;
            document.getElementById('resultDescription').textContent = place.description;
            document.querySelector('.progress').classList.add('hidden');
        }

        // Restart quiz
        function restartQuiz() {
            currentQuestion = 0;
            answers = { domens: 0, create: 0, hygge: 0 };
            selectedOption = null;
            
            document.getElementById('questionCard').classList.remove('hidden');
            document.getElementById('resultCard').classList.add('hidden');
            document.querySelector('.progress').classList.remove('hidden');
            
            showQuestion();
        }

        // Start quiz on load
        initQuiz();






    function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    const backdrop = document.getElementById('menuBackdrop');
    
    menuOverlay.classList.toggle('active');
    
    if (backdrop) {
        backdrop.classList.toggle('active');
    }
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menuOverlay = document.getElementById('menuOverlay');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (!menuOverlay.contains(event.target) && !menuBtn.contains(event.target)) {
        menuOverlay.classList.remove('active');
    }
});