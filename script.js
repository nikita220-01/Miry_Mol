document.addEventListener('DOMContentLoaded', function() {
    const lessonItems = document.querySelectorAll('.lesson-item');
    const contentArea = document.querySelector('.content-area');

    lessonItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all lessons
            lessonItems.forEach(li => li.classList.remove('active'));
            // Add active class to clicked lesson
            this.classList.add('active');

            const lessonTitle = this.querySelector('.lesson-title').textContent;

            // Update content area with lesson details
            contentArea.innerHTML = `
                <div class="lesson-content">
                    <h2>${lessonTitle}</h2>
                    <div class="sections-container">
                        <div class="section-card theory-section">
                            <div class="section-header">
                                <span class="section-icon">📖</span>
                                <h3>Theory</h3>
                            </div>
                            <p>This section covers the theoretical foundations and key concepts for this lesson.</p>
                            <button class="section-btn">Start Theory</button>
                        </div>
                        <div class="section-card practice-section">
                            <div class="section-header">
                                <span class="section-icon">⚡</span>
                                <h3>Practice</h3>
                            </div>
                            <p>Apply your knowledge with hands-on exercises and practical tasks.</p>
                            <button class="section-btn">Start Practice</button>
                        </div>
                        <div class="section-card homework-section">
                            <div class="section-header">
                                <span class="section-icon">📝</span>
                                <h3>Homework</h3>
                            </div>
                            <p>Complete these assignments to reinforce what you've learned.</p>
                            <button class="section-btn">Start Homework</button>
                        </div>
                    </div>
                </div>
            `;
        });
    });
});