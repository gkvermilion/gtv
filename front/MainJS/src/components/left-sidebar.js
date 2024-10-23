export function renderLeftSidebar() {
    const sidebar = document.getElementById('left-sidebar');
    sidebar.innerHTML = `
        <nav class="sidebar-nav">
            <ul>
                <li><i data-lucide="home"></i> Home</li>
                <li><i data-lucide="compass"></i> Explore</li>
                <li><i data-lucide="play-square"></i> Subscriptions</li>
            </ul>
            <hr>
            <ul>
                <li><i data-lucide="film"></i> Library</li>
                <li><i data-lucide="clock"></i> History</li>
                <li><i data-lucide="play-square"></i> Your videos</li>
                <li><i data-lucide="clock"></i> Watch later</li>
                <li><i data-lucide="thumbs-up"></i> Liked videos</li>
            </ul>
            <hr>
            <h3>Subscriptions</h3>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Fashion</li>
            </ul>
            <hr>
            <h3>Explore</h3>
            <ul>
                <li><i data-lucide="flame"></i> Trending</li>
                <li><i data-lucide="shopping-bag"></i> Shopping</li>
                <li><i data-lucide="music-2"></i> Music</li>
                <li><i data-lucide="film"></i> Movies & TV</li>
                <li><i data-lucide="radio"></i> Live</li>
                <li><i data-lucide="gamepad-2"></i> Gaming</li>
                <li><i data-lucide="newspaper"></i> News</li>
                <li><i data-lucide="trophy"></i> Sports</li>
                <li><i data-lucide="lightbulb"></i> Learning</li>
                <li><i data-lucide="clapperboard"></i> Fashion & Beauty</li>
            </ul>
        </nav>
    `;
}