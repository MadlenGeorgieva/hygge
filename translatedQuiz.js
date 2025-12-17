// Quiz questions
        const questions = [
            {
                image: "Pictures/Quiz1.jpg",
                question: "Hvordan foretrækker du at bruge din fritid?",
                options: [
                    { text: "At læse en bog eller slappe af med en varm drik.", place: "domens" },
                    { text: "Tegning, skitsering eller design.", place: "create" },
                    { text: "Håndværk — strikning, makramé, gør-det-selv-projekter.", place: "create" },
                    { text: "Bare gå rundt eller udforske tilfældigt.", place: "hygge" }
                ]
            },
            {
                image: "Pictures/Quiz2.jpg",
                question: "Hvilken slags atmosfære tiltaler dig mest?",
                options: [
                    { text: "Stille og hyggelig med blød belysning.", place: "domens" },
                    { text: "Kreativ og farverig med håndværk.", place: "create" },
                    { text: "Moderne og Instagram-værdig.", place: "hygge" },
                    { text: "Varm og modtagelig med venlige følelser.", place: "domens" }
                ]
            },
            {
                image: "Pictures/Quiz3.jpg",
                question: "Hvordan foretrækker du at socialisere?",
                options: [
                    { text: "En-til-en dybe samtaler.", place: "domens" },
                    { text: "Gruppeaktiviteter hvor vi laver noget sammen.", place: "create" },
                    { text: "Kasual sammenkomst i et trendy sted.", place: "hygge" },
                    { text: "Jeg foretrækker alene tid for at genoplive mine kræfter.", place: "domens" }
                ]
            },
            {
                image: "Pictures/Quiz4.jpg",
                question: "Hvordan foretrækker du at bruge en regnfuld eftermiddag?",
                options: [
                    { text: "At drikke kaffe og skrive i en dagbog.", place: "domens" },
                    { text: "Tegne eller lave et håndværksprojekt.", place: "create" },
                    { text: "Udforske nye steder i byen.", place: "hygge" },
                    { text: "Browsing a cozy shop or bookstore.", place: "hygge" }
                ]
            },
            {
                image: "Pictures/Quiz5.jpg",
                question: "Hvad slags oplevelse søger du?",
                options: [
                    { text: "Noget roligt og afslappende.", place: "domens" },
                    { text: "Noget kreativt og håndværk.", place: "create" },
                    { text: "Noget estetisk og huskeligt.", place: "hygge" },
                    { text: "Noget unikt og inspirerende.", place: "create" }
                ]
            }
        ];

        // Place information
        const places = {
            domens: {
                name: "Domen's Coffee",
                description: "En hyggelig kaffebar, perfekt til afslapning, varme drikke og stille samtaler. Det ideelle sted for fredfyldte øjeblikke og kreativ inspiration.",
                image: "Pictures/Domen Home.jpg"
            },
            create: {
                name: "Create Aarhus",
                    description: "Et kreativt værksted, hvor du kan lave lys, male keramik og udforske din kunstneriske side. Perfekt til praktiske oplevelser og skabelse af minder.",
                    image: "Pictures/Create Aarhus Home.jpg"
            },
            hygge: {
                name: "Creating Moments",
                description: "Fordi du nyder at være kreativ, anbefaler vi Creating Memories for deres hyggelige workshops i strikning, makramé og andet praktisk håndværk.",
                image: "Pictures/Creating Moments Home.jpg"
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
            document.getElementById('resultImage').src = place.image;
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