// Enhanced Blog JavaScript
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

    // Sample posts data - in a real app, this would come from an API or JSON file
    loadPosts() {
        this.posts = [
            {
                id: 1,
                title: "The Art of Digital Minimalism",
                excerpt: "In an age of constant connectivity, finding balance between technology and human experience has become essential...",
                content: `<p>The digital age has brought unprecedented convenience and connectivity...</p>`,
                category: "mindfulness",
                date: "2024-01-15",
                wordCount: 450,
                readTime: 3
            },
            {
                id: 2,
                title: "Creativity in the Age of Algorithms",
                excerpt: "How artificial intelligence is reshaping creative expression...",
                content: `<p>The rise of generative AI has sparked intense debate about the future of creativity...</p>`,
                category: "creativity",
                date: "2024-01-10",
                wordCount: 380,
                readTime: 2
            },
            {
                id: 3,
                title: "The Philosophy of Slow Technology",
                excerpt: "Examining the movement toward more thoughtful, intentional technology design...",
                content: `<p>In a world where technology companies compete for our attention...</p>`,
                category: "technology",
                date: "2024-01-05",
                wordCount: 420,
                readTime: 3
            },
            {
                id: 4,
                title: "Writing as a Form of Thinking",
                excerpt: "How the act of writing transforms our thoughts and helps us discover what we truly believe...",
                content: `<p>Hayotda muvaffaqiyatga erishish uchun muvozanatni topish juda muhim...</p>`,
                category: "writing",
                date: "2023-12-28",
                wordCount: 350,
                readTime: 2
            },
            {
                id: 5,
                title: "The Power of Perspective",
                excerpt: "How changing our viewpoint can transform our understanding...",
                content: `<p>Perspective is one of the most powerful tools we have for understanding the world...</p>`,
                category: "perspective",
                date: "2023-12-20",
                wordCount: 400,
                readTime: 3
            },
            {
                id: 6,
                title: "Reflection as a Daily Practice",
                excerpt: "How regular reflection can transform our self-awareness, decision-making...",
                content: `<p>In our fast-paced world, reflection often gets pushed aside...</p>`,
                category: "reflection",
                date: "2023-12-15",
                wordCount: 450,
                readTime: 3
            },

            {
  id: 7,
  title: "How to Think Clearly",
  excerpt: "Tips on developing mental clarity and cutting through confusion...",
  content: `
    <p>Thinking clearly is not about being smart. It's about slowing down...</p>
    <p>Here are 3 habits that help:</p>
    <ul>
      <li>Write your thoughts out</li>
      <li>Sleep on big decisions</li>
      <li>Ask better questions</li>
    </ul>
  `,
  category: "thinking",
  date: "2024-08-01",
  wordCount: 420,
  readTime: 3
}

        ];

        this.filteredPosts = [...this.posts];
        this.renderPosts();
    }

    setupEventListeners() {
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => this.toggleTheme());

        const searchInput = document.getElementById('searchInput');
        const searchClear = document.getElementById('searchClear');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchQuery = e.target.value.toLowerCase();
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

        const categoryLinks = document.querySelectorAll('.nav-link');
        categoryLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.setActiveCategory(e.target.dataset.category);
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
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
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
                    <span>${post.category}</span>
                </div>
                <div class="post-stats">
                    <span>${post.wordCount} words</span>
                    <span>${post.readTime} min read</span>
                </div>
            </article>
        `).join('');

        postsGrid.querySelectorAll('.post-card').forEach(card => {
            card.addEventListener('click', () => {
                const postId = parseInt(card.dataset.postId);
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
        if (essayCategory) essayCategory.textContent = post.category;
        if (essayStats) essayStats.textContent = `${post.wordCount} words • ${post.readTime} min read`;
        if (essayContent) essayContent.innerHTML = post.content;

        window.history.pushState({ postId }, '', `#post-${postId}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showPostsList() {
        const singlePost = document.getElementById('singlePost');
        const postsContainer = document.getElementById('postsContainer');
        if (singlePost) singlePost.style.display = 'none';
        if (postsContainer) postsContainer.style.display = 'block';
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
        document.getElementById('loadingSpinner').style.display = 'flex';
    }

    hideLoading() {
        document.getElementById('loadingSpinner').style.display = 'none';
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
}); working
