export function renderHeader() {
    const header = document.getElementById('main-header');
    header.innerHTML = `
        <div class="header-content">
            <div class="logo">
                <button id="menu-toggle" class="btn">
                    <i data-lucide="menu"></i>
                </button>
                <i data-lucide="youtube"></i>
                <span>GTV</span>
            </div>
            <div class="search-form">
                <form class="relative">
                    <input type="search" placeholder="Search" class="search-input">
                    <i data-lucide="search" class="search-icon-left"></i>
                    <button type="submit" class="search-button">
                        <i data-lucide="search"></i>
                    </button>
                </form>
            </div>
            <div class="user-actions">
                <button id="upload" class="btn">
                    <i data-lucide="video"></i>
                </button>
                <button class="btn">
                    <i data-lucide="bell"></i>
                </button>
                <div class="avatar"></div>
            </div>
        </div>
    `;
}