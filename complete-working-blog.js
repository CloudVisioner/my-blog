// Enhanced Blog JavaScript - Complete Working Version
class EnhancedBlog {
    constructor() {
        this.posts = [];
        this.filteredPosts = [];
        this.currentPage = 1;
        this.postsPerPage = 6;
        this.currentCategory = 'all';
        this.searchQuery = '';
        this.currentTheme = 'light';

        this.init();
    }

    init() {
        this.loadPosts();
        this.setupEventListeners();
        this.loadTheme();
        this.setupMobileMenu();
        this.setupBackToTop();
        this.setupKeyboardShortcuts();
    }

    // Complete posts data with full content
    loadPosts() {
        this.posts = [
            {
                id: 1,
                title: "The Art of Digital Minimalism",
                excerpt: "In an age of constant connectivity, finding balance between technology and human experience has become essential...",
                content: `
                    <p>The digital age has brought unprecedented convenience and connectivity, but it has also created new challenges for our mental well-being and productivity. Digital minimalism is not about rejecting technology entirely, but about being more intentional with how we use it.</p>
               Search bar     
                    <p>The core principle of digital minimalism is simple: technology should serve us, not the other way around. This means carefully evaluating which digital tools truly add value to our lives and eliminating those that don't.</p>
                    
                    <h3>Key Principles of Digital Minimalism</h3>
                    <ul>
                        <li><strong>Intentional Use:</strong> Before adopting any new technology, ask yourself what specific value it will add to your life.</li>
                        <li><strong>Regular Audits:</strong> Periodically review your digital tools and eliminate those that no longer serve you.</li>
                        <li><strong>Batch Processing:</strong> Instead of constantly checking messages and notifications, set specific times for digital communication.</li>
                        <li><strong>Analog Alternatives:</strong> Consider whether physical alternatives might serve you better for certain activities.</li>
                    </ul>
                    
                    <p>By embracing digital minimalism, we can reclaim our attention, reduce anxiety, and create more space for meaningful activities and relationships in our lives.</p>
                    
                    <h3>Practical Steps to Get Started</h3>
                    <p>Begin your digital minimalism journey with these actionable steps:</p>
                    <ol>
                        <li>Conduct a digital declutter by removing apps that don't serve a clear purpose</li>
                        <li>Set specific times for checking email and social media</li>
                        <li>Create phone-free zones in your home</li>
                        <li>Practice single-tasking instead of multitasking</li>
                        <li>Regularly evaluate your relationship with technology</li>
                    </ol>
                `,
                category: "mindfulness",
                date: "2024-01-15",
                wordCount: 450,
                readTime: 3
            },
            {
                id: 2,
                title: "Creativity in the Age of Algorithms",
                excerpt: "How artificial intelligence is reshaping creative expression...",
                content: `
                    <p>The rise of generative AI has sparked intense debate about the future of creativity. Are we witnessing the democratization of creative expression, or the beginning of its end?</p>
                    
                    <p>Artificial intelligence tools can now generate images, write stories, compose music, and even create videos with remarkable sophistication. This technological leap challenges our fundamental assumptions about what it means to be creative.</p>
                    
                    <h3>The Changing Landscape</h3>
                    <p>Traditional creative processes involved years of skill development, practice, and refinement. Today, anyone can produce professional-looking artwork or compelling written content with the help of AI tools. This shift raises important questions:</p>
                    
                    <ul>
                        <li>What role does human intention play in creativity?</li>
                        <li>How do we value the creative process versus the final output?</li>
                        <li>What happens to traditional creative professions?</li>
                        <li>Can machines truly be creative, or are they sophisticated mimics?</li>
                    </ul>
                    
                    <h3>Finding Balance</h3>
                    <p>Rather than viewing AI as a threat to human creativity, we might consider it as a new tool in our creative toolkit. The key is to maintain human agency and intentionality in the creative process.</p>
                    
                    <p>The most compelling creative work in the age of algorithms may be that which combines the efficiency of AI with the depth of human experience and emotion. Artists who learn to collaborate with AI while preserving their unique voice and perspective will likely thrive.</p>
                    
                    <h3>The Human Element</h3>
                    <p>What remains uniquely human in creativity is our ability to:</p>
                    <ul>
                        <li>Draw from personal experience and emotion</li>
                        <li>Make meaningful connections between disparate ideas</li>
                        <li>Understand cultural context and nuance</li>
                        <li>Create with intention and purpose</li>
                    </ul>
                `,
                category: "creativity",
                date: "2024-01-10",
                wordCount: 380,
                readTime: 2
            },
            {
                id: 3,
                title: "The Philosophy of Slow Technology",
                excerpt: "Examining the movement toward more thoughtful, intentional technology design...",
                content: `
                    <p>In a world where technology companies compete for our attention with increasingly sophisticated engagement mechanisms, a counter-movement is emerging: slow technology.</p>
                    
                    <p>Slow technology is inspired by the slow food movement, emphasizing quality over quantity, mindfulness over speed, and human well-being over engagement metrics.</p>
                    
                    <h3>Principles of Slow Technology</h3>
                    <p>The slow technology movement is built on several key principles:</p>
                    
                    <ul>
                        <li><strong>Respect for User Agency:</strong> Technology should empower users to make conscious choices rather than manipulating them into compulsive behaviors.</li>
                        <li><strong>Sustainable Attention:</strong> Instead of fragmenting our attention, technology should help us focus on what matters most.</li>
                        <li><strong>Human-Centered Design:</strong> The needs and well-being of users should take priority over business metrics.</li>
                        <li><strong>Transparency:</strong> Users should understand how technology works and what data is being collected.</li>
                        <li><strong>Mindful Pacing:</strong> Technology should respect natural human rhythms rather than demanding constant availability.</li>
                    </ul>
                    
                    <h3>Examples of Slow Technology</h3>
                    <p>Several companies and products embody slow technology principles:</p>
                    <ul>
                        <li>E-ink displays that reduce eye strain and battery consumption</li>
                        <li>Apps that encourage reflection rather than rapid consumption</li>
                        <li>Devices designed for longevity rather than planned obsolescence</li>
                        <li>Interfaces that prioritize clarity over engagement tricks</li>
                    </ul>
                    
                    <h3>Implementing Slow Technology</h3>
                    <p>As individuals, we can embrace slow technology by:</p>
                    <ul>
                        <li>Choosing tools that respect our time and attention</li>
                        <li>Setting boundaries around technology use</li>
                        <li>Supporting companies that prioritize user well-being</li>
                        <li>Practicing digital mindfulness</li>
                        <li>Advocating for more humane technology design</li>
                    </ul>
                    
                    <p>The goal is not to reject technological progress, but to ensure that it serves human flourishing rather than undermining it.</p>
                `,
                category: "technology",
                date: "2024-01-05",
                wordCount: 420,
                readTime: 3
            },
            {
                id: 4,
                title: "Writing as a Form of Thinking",
                excerpt: "How the act of writing transforms our thoughts and helps us discover what we truly believe...",
                content: `
                    <p>Writing is not just a way to communicate ideas—it's a way to discover them. When we write, we don't simply transcribe pre-formed thoughts; we think on paper, allowing our ideas to evolve and clarify through the process itself.</p>
                    
                    <p>This concept challenges the common assumption that we must know what we want to say before we begin writing. In reality, the act of writing often reveals thoughts we didn't know we had.</p>
                    
                    <h3>The Discovery Process</h3>
                    <p>When we sit down to write about a topic, several things happen:</p>
                    
                    <ul>
                        <li><strong>Externalization:</strong> Vague internal thoughts become concrete external words</li>
                        <li><strong>Examination:</strong> We can see our thoughts objectively and evaluate them</li>
                        <li><strong>Connection:</strong> We discover relationships between ideas that weren't apparent before</li>
                        <li><strong>Refinement:</strong> We clarify and improve our thinking through revision</li>
                    </ul>
                    
                    <h3>Writing as Problem-Solving</h3>
                    <p>Many writers report that they don't know what they think about a subject until they try to write about it. The constraints of language force us to be precise, to choose specific words and arrange them in logical order.</p>
                    
                    <p>This process of translation from thought to language often reveals gaps in our understanding or inconsistencies in our reasoning. Writing becomes a form of debugging our thoughts.</p>
                    
                    <h3>The Iterative Nature of Thought</h3>
                    <p>Writing allows us to engage in a dialogue with our own ideas. We write something, read it back, and respond to it. This creates a feedback loop that deepens our understanding and refines our thinking.</p>
                    
                    <h3>Practical Applications</h3>
                    <p>To harness writing as a thinking tool:</p>
                    <ul>
                        <li>Write regularly, even when you don't feel you have anything to say</li>
                        <li>Don't worry about perfection in first drafts</li>
                        <li>Use writing to work through problems and decisions</li>
                        <li>Embrace the messiness of the thinking process</li>
                        <li>Keep a journal for exploring ideas without judgment</li>
                        <li>Write to understand, not just to communicate</li>
                    </ul>
                    
                    <p>Remember: the goal is not to produce polished prose, but to think more clearly and deeply about what matters to you.</p>
                `,
                category: "writing",
                date: "2023-12-28",
                wordCount: 350,
                readTime: 2
            },
            {
                id: 5,
                title: "The Power of Perspective",
                excerpt: "How changing our viewpoint can transform our understanding...",
                content: `
                    <p>Perspective is one of the most powerful tools we have for understanding the world around us. The same event can be experienced as a tragedy or an opportunity, depending on how we choose to view it.</p>
                    
                    <p>This isn't about positive thinking or denial of reality. It's about recognizing that our interpretation of events is often more important than the events themselves in determining our experience and response.</p>
                    
                    <h3>The Nature of Perspective</h3>
                    <p>Our perspective is shaped by many factors:</p>
                    
                    <ul>
                        <li><strong>Past experiences:</strong> What we've been through colors how we see new situations</li>
                        <li><strong>Cultural background:</strong> Our social and cultural context provides a lens for interpretation</li>
                        <li><strong>Current state:</strong> Our mood, energy level, and circumstances affect our viewpoint</li>
                        <li><strong>Future expectations:</strong> What we hope for or fear influences present perception</li>
                        <li><strong>Values and beliefs:</strong> Our core principles shape how we interpret events</li>
                    </ul>
                    
                    <h3>The Flexibility of Perspective</h3>
                    <p>One of the most liberating realizations is that perspective is often a choice. While we can't always control what happens to us, we can often influence how we interpret and respond to events.</p>
                    
                    <h3>Shifting Perspective</h3>
                    <p>Some techniques for shifting perspective include:</p>
                    
                    <ul>
                        <li>Asking "What else could this mean?"</li>
                        <li>Considering how someone you admire might view the situation</li>
                        <li>Looking for potential benefits or learning opportunities</li>
                        <li>Zooming out to see the bigger picture</li>
                        <li>Imagining how you might view this situation in 10 years</li>
                        <li>Seeking input from people with different backgrounds</li>
                    </ul>
                    
                    <h3>The Practice of Perspective</h3>
                    <p>Developing flexibility in perspective is a skill that improves with practice. By regularly questioning our initial interpretations and considering alternative viewpoints, we can become more resilient, creative, and wise.</p>
                    
                    <p>This doesn't mean becoming wishy-washy or losing your convictions. Rather, it means holding your views with appropriate confidence while remaining open to new information and different ways of seeing.</p>
                    
                    <p>Remember: the goal isn't to always see things positively, but to see them more completely and accurately.</p>
                `,
                category: "perspective",
                date: "2023-12-20",
                wordCount: 400,
                readTime: 3
            },
            {
                id: 6,
                title: "Reflection as a Daily Practice",
                excerpt: "How regular reflection can transform our self-awareness, decision-making...",
                content: `
                    <p>In our fast-paced world, reflection often gets pushed aside in favor of action and productivity. However, regular reflection is one of the most valuable practices we can develop for personal growth and improved decision-making.</p>
                    
                    <p>Reflection is more than just thinking about your day. It's a deliberate practice of examining your experiences, thoughts, and actions to extract insights and learning.</p>
                    
                    <h3>Benefits of Regular Reflection</h3>
                    <p>Daily reflection offers numerous benefits:</p>
                    
                    <ul>
                        <li><strong>Increased self-awareness:</strong> Understanding your patterns, triggers, and responses</li>
                        <li><strong>Better decision-making:</strong> Learning from past choices to make better future ones</li>
                        <li><strong>Emotional processing:</strong> Working through difficult emotions and experiences</li>
                        <li><strong>Goal alignment:</strong> Ensuring your actions align with your values and objectives</li>
                        <li><strong>Gratitude cultivation:</strong> Recognizing positive aspects of your life</li>
                        <li><strong>Stress reduction:</strong> Processing events rather than carrying them as mental baggage</li>
                    </ul>
                    
                    <h3>Types of Reflection</h3>
                    <p>There are different types of reflection, each serving a unique purpose:</p>
                    <ul>
                        <li><strong>Daily reflection:</strong> Brief review of the day's events and lessons</li>
                        <li><strong>Weekly reflection:</strong> Broader patterns and progress toward goals</li>
                        <li><strong>Monthly reflection:</strong> Larger themes and life direction</li>
                        <li><strong>Annual reflection:</strong> Major life changes and long-term growth</li>
                    </ul>
                    
                    <h3>How to Reflect Effectively</h3>
                    <p>Effective reflection involves asking yourself meaningful questions:</p>
                    
                    <ul>
                        <li>What went well today, and why?</li>
                        <li>What could I have done differently?</li>
                        <li>What did I learn about myself or others?</li>
                        <li>How did I handle challenges?</li>
                        <li>What am I grateful for?</li>
                        <li>What do I want to focus on tomorrow?</li>
                        <li>What patterns am I noticing in my behavior?</li>
                    </ul>
                    
                    <h3>Making Reflection a Habit</h3>
                    <p>To establish a sustainable reflection practice:</p>
                    <ul>
                        <li>Set aside a specific time each day (many prefer evening)</li>
                        <li>Start small—even 5 minutes can be valuable</li>
                        <li>Write down your reflections to make them more concrete</li>
                        <li>Be honest but compassionate with yourself</li>
                        <li>Focus on learning rather than judgment</li>
                        <li>Create a comfortable, distraction-free environment</li>
                    </ul>
                    
                    <p>Remember, reflection is not about perfection or harsh self-criticism. It's about creating space for learning and growth in your daily life.</p>
                `,
                category: "reflection",
                date: "2023-12-15",
              
            },
            {
                id: 7,
                title: "How to Think Clearly",
                excerpt: "Tips on developing mental clarity and cutting through confusion...",
                content: `
                    <p>Thinking clearly is not about being smart. It's about slowing down, questioning assumptions, and developing mental frameworks that help us navigate complexity.</p>
                    
                    <p>In a world full of information overload and competing narratives, the ability to think clearly has become more valuable than ever. Clear thinking helps us make better decisions, solve problems more effectively, and communicate our ideas with precision.</p>
                    
                    <h3>Barriers to Clear Thinking</h3>
                    <p>Several factors can cloud our thinking:</p>
                    
                    <ul>
                        <li><strong>Emotional reactivity:</strong> Strong emotions can hijack our rational thinking</li>
                        <li><strong>Cognitive biases:</strong> Mental shortcuts that can lead us astray</li>
                        <li><strong>Information overload:</strong> Too much information can paralyze decision-making</li>
                        <li><strong>Social pressure:</strong> The desire to conform can override independent thinking</li>
                        <li><strong>Fatigue:</strong> Mental exhaustion reduces our capacity for clear thought</li>
                        <li><strong>Assumptions:</strong> Unexamined beliefs that limit our perspective</li>
                    </ul>
                    
                    <h3>Three Core Habits for Clearer Thinking</h3>
                    
                    <h4>1. Write Your Thoughts Out</h4>
                    <p>Writing forces us to articulate our thoughts precisely. When we write, we often discover that what seemed clear in our minds is actually confused or incomplete. The act of putting thoughts into words helps us identify gaps in our reasoning and clarify our ideas.</p>
                    
                    <p>Try this: When facing a difficult decision, write out your thoughts without editing. Then read what you've written and ask yourself: "Does this make sense? What am I missing?"</p>
                    
                    <h4>2. Sleep on Big Decisions</h4>
                    <p>Our brains continue processing information while we sleep. Often, problems that seem intractable in the evening become clearer in the morning. This isn't just about being well-rested—it's about giving our subconscious mind time to work on complex problems.</p>
                    
                    <p>The phrase "sleep on it" exists for a reason. Our unconscious mind can make connections and see solutions that our conscious mind misses.</p>
                    
                    <h4>3. Ask Better Questions</h4>
                    <p>The quality of our thinking is often determined by the quality of our questions. Instead of asking "What should I do?" try asking "What are my options and what are the likely consequences of each?" Better questions lead to better thinking.</p>
                    
                    <p>Some powerful questions to ask:</p>
                    <ul>
                        <li>What evidence supports this belief?</li>
                        <li>What would someone who disagrees with me say?</li>
                        <li>What am I not seeing?</li>
                        <li>What are the second and third-order effects?</li>
                    </ul>
                    
                    <h3>Additional Strategies for Clear Thinking</h3>
                    <ul>
                        <li>Practice intellectual humility—be willing to change your mind</li>
                        <li>Seek out diverse perspectives</li>
                        <li>Break complex problems into smaller parts</li>
                        <li>Use frameworks and mental models</li>
                        <li>Take regular breaks to prevent mental fatigue</li>
                        <li>Question your assumptions regularly</li>
                        <li>Learn to sit with uncertainty</li>
                    </ul>
                    
                    <p>Clear thinking is a skill that improves with practice. By developing these habits and strategies, we can cut through confusion and make better decisions in all areas of our lives. The goal is not to eliminate all uncertainty, but to think as clearly as possible given the information we have.</p>
                `,
                category: "thinking",
                date: "2024-08-01",
                wordCount: 420,
                readTime: 3
            }, 

            {
    id: 8, // Make sure this is unique and sequential
    title: "Your Post Title Here",
    excerpt: "A one or two sentence summary of your post for previews.",
    content: `
        <p>This is the main content of your blog post.</p>
        <h3>Subtitle Example</h3>
        <p>You can write paragraphs, lists, add <strong>bold</strong> or <em>italic</em> text.</p>
        <ul>
            <li>Write as much as you want</li>
            <li>You can use HTML tags for formatting</li>
            <li>This will all be shown on your blog</li>
        </ul>
        <p>Wrap your text in <code>&lt;p&gt;...&lt;/p&gt;</code> tags for paragraphs.</p>
    `,
    category: "your-category", // e.g., "mindfulness", "creativity", "writing", or any custom category
    date: "2024-07-29", // Use today’s date or whenever you want
    wordCount: 350, // You can estimate this, it’s just for info
    readTime: 2 // In minutes, e.g., 2, 3, 5
}
        ];

        this.filteredPosts = [...this.posts];
        this.renderPosts();
    }

    setupEventListeners() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase();
        // FILTER *as you type*, immediately!
        this.filterPosts();
    });
}

if (searchClear) {
    searchClear.addEventListener('click', () => {
        if (searchInput) {
            searchInput.value = '';
        }
        this.searchQuery = '';
        this.filterPosts();
    });
}



        // CRITICAL: Setup sidebar navigation links to show individual posts
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const postTitle = link.dataset.title;
                if (postTitle) {
                    this.showSinglePostByTitle(postTitle);
                    // Update active state
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });

        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.previousPage());
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextPage());
        }

        const backBtn = document.getElementById('backBtn');
        if (backBtn) {
            backBtn.addEventListener('click', () => this.showPostsList());
        }
    }

    setupMobileMenu() {
        const mobileToggle = document.getElementById('mobileMenuToggle');
        const sidebar = document.getElementById('sidebar');

        if (mobileToggle && sidebar) {
            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('active');
                sidebar.classList.toggle('mobile-hidden');
            });

            document.addEventListener('click', (e) => {
                if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
                    mobileToggle.classList.remove('active');
                    sidebar.classList.add('mobile-hidden');
                }
            });
        }
    }

    setupBackToTop() {
        const backToTopBtn = document.getElementById('backToTop');

        if (backToTopBtn) {
            window.addEventListener('scroll', () => {
                backToTopBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
            });

            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.focus();
            }

            if (e.key === 'Escape') {
                const searchInput = document.getElementById('searchInput');
                if (document.activeElement === searchInput && searchInput) {
                    searchInput.value = '';
                    this.searchQuery = '';
                    this.filterPosts();
                }
            }
        });
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    setActiveCategory(category) {
        this.currentCategory = category;
        this.currentPage = 1;
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        const categoryLink = document.querySelector(`[data-category="${category}"]`);
        if (categoryLink) {
            categoryLink.classList.add('active');
        }
        this.filterPosts();
    }

    filterPosts() {
        this.filteredPosts = this.posts.filter(post => {
            const query = this.searchQuery.trim().toLowerCase();
            if (query.length < 1) return true;
            const titleMatch = post.title.toLowerCase().includes(query);
            const excerptMatch = post.excerpt.toLowerCase().includes(query);
            const contentMatch = post.content.toLowerCase().includes(query);
            return titleMatch || excerptMatch || contentMatch;
        });

        this.updateSearchUI();
        this.renderPosts();
    }

    updateSearchUI() {
        const searchInput = document.getElementById('searchInput');
        const searchClear = document.getElementById('searchClear');
        const filterInfo = document.getElementById('filterInfo');

        if (this.searchQuery && searchClear) {
            searchClear.style.display = 'block';
        } else if (searchClear) {
            searchClear.style.display = 'none';
        }

        if (filterInfo) {
            filterInfo.textContent = this.searchQuery ? `Searching for "${this.searchQuery}"` : '';
        }
    }

    renderPosts() {
        const postsGrid = document.getElementById('postsGrid');
        const postsCount = document.getElementById('postsCount');
        const pagination = document.getElementById('pagination');
        if (!postsGrid) return;

        const startIndex = (this.currentPage - 1) * this.postsPerPage;
        const endIndex = startIndex + this.postsPerPage;
        const currentPosts = this.filteredPosts.slice(startIndex, endIndex);

        if (postsCount) {
            postsCount.textContent = `${this.filteredPosts.length} post${this.filteredPosts.length !== 1 ? 's' : ''}`;
        }

        postsGrid.innerHTML = currentPosts.map(post => `
    <article class="post-card" data-post-id="${post.id}">
        <h3 class="post-title">${post.title}</h3>
        <p class="post-excerpt">${post.excerpt}</p>
        <div class="post-meta">
            <span>${this.formatDate(post.date)}</span>
        </div>
    </article>
`).join('');

        // Add click event listeners to each post-card to show the full essay
        postsGrid.querySelectorAll('.post-card').forEach(card => {
            card.addEventListener('click', () => {
                const postId = parseInt(card.getAttribute('data-post-id'), 10);
                this.showSinglePost(postId);
            });
        });

        this.updatePagination();
    }

    updatePagination() {
        const pagination = document.getElementById('pagination');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const paginationInfo = document.getElementById('paginationInfo');
        if (!pagination) return;

        const totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);

        if (totalPages <= 1) {
            pagination.style.display = 'none';
            return;
        }

        pagination.style.display = 'flex';

        if (prevBtn) prevBtn.disabled = this.currentPage === 1;
        if (nextBtn) nextBtn.disabled = this.currentPage === totalPages;

        if (paginationInfo) {
            paginationInfo.textContent = `Page ${this.currentPage} of ${totalPages}`;
        }
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.renderPosts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    nextPage() {
        const totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);
        if (this.currentPage < totalPages) {
            this.currentPage++;
            this.renderPosts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // CRITICAL: Method to show post by title (for sidebar navigation)
    showSinglePostByTitle(title) {
        const post = this.posts.find(p => p.title === title);
        if (post) {
            this.showSinglePost(post.id);
        }
    }

    showSinglePost(postId) {
        const post = this.posts.find(p => p.id === postId);
        if (!post) return;

        const postsContainer = document.getElementById('postsContainer');
        const singlePost = document.getElementById('singlePost');
        if (postsContainer) postsContainer.style.display = 'none';
        if (singlePost) singlePost.style.display = 'block';

        const essayTitle = document.getElementById('essayTitle');
        const essayDate = document.getElementById('essayDate');
        const essayCategory = document.getElementById('essayCategory');
        const essayStats = document.getElementById('essayStats');
        const essayContent = document.getElementById('essayContent');

        if (essayTitle) essayTitle.textContent = post.title;
        if (essayDate) essayDate.textContent = this.formatDate(post.date);
        if (essayCategory) essayCategory.textContent = '';
        if (essayStats) essayStats.textContent = '';
        if (essayContent) essayContent.innerHTML = post.content;

        window.history.pushState({ postId }, '', `#post-${postId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showPostsList() {
        const singlePost = document.getElementById('singlePost');
        const postsContainer = document.getElementById('postsContainer');
        if (singlePost) singlePost.style.display = 'none';
        if (postsContainer) postsContainer.style.display = 'block';
        
        // Clear active state from sidebar links
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        
        window.history.pushState({}, '', window.location.pathname);
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    showLoading() {
        const loadingSpinner = document.getElementById('loadingSpinner');
        if (loadingSpinner) {
            loadingSpinner.style.display = 'flex';
        }
    }

    hideLoading() {
        const loadingSpinner = document.getElementById('loadingSpinner');
        if (loadingSpinner) {
            loadingSpinner.style.display = 'none';
        }
    }
}

// Initialize the blog when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.blogInstance = new EnhancedBlog();
});

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
    const blog = window.blogInstance;
    if (event.state && event.state.postId) {
        blog?.showSinglePost(event.state.postId);
    } else {
        blog?.showPostsList();
    }
});