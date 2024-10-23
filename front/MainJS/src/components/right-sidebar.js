export function renderRightSidebar() {
    const content = document.getElementById('content');
    const sidebar = document.createElement('aside');
    sidebar.id = 'right-sidebar';
    sidebar.innerHTML = `
        <h3>Up next</h3>
        ${Array(5).fill().map((_, i) => `
            <div class="sidebar-video">
                <div class="sidebar-video-thumbnail"></div>
                <div>
                    <h4>Video Title ${i + 1}</h4>
                    <p>Channel Name</p>
                    <p>100K views • 1 day ago</p>
                </div>
            </div>
        `).join('')}
    `;
    content.appendChild(sidebar);
}