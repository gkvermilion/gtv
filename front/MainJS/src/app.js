import { renderHeader } from './components/header.js';
import { renderLeftSidebar } from './components/left-sidebar.js';
import { renderMainContent } from './components/main-content.js';
import { renderRightSidebar } from './components/right-sidebar.js';
import { renderUpload } from "./components/upload";
import './styles.css';
import './video.css';
// const routes = {
//     "/": {
//         id: "home",
//         content: `I am in home page`
//     },
//     "/about": {
//         id: "upload",
//         content: `I am in about page`
//     },
// };
//
// const renderContent = (route) => {
//     console.log(route);
//     mainContent.innerHTML = routes[route].content};
//
// const navigate = (e) => {
//     const route = e.target.pathname;
//     window.history.pushState({}, "", route);
//     renderContent(route);
// };
//
// const registerNavLinks = () => {
//     Object.keys(routes).forEach((route) => {
//         const { id } = routes[route];
//         document.getElementById(id).addEventListener("click", (e) => {
//             e.preventDefault();
//             const { href } = e.target;
//             window.history.pushState({}, "", href);
//             navigate(e);
//         });
//     })
// };
//
// const registerBrowserBackAndForth = () => {
//     window.onpopstate = function (e) {
//         const route = window.location.pathname;
//         renderContent(route);
//     };
// };
//
// const renderInitialPage = () => {
//     const route = window.location.pathname;
//     renderContent(route);
// };

// function loadScript() {
//     const serverScript = document.createElement("script");
//     serverScript.type = "text/javascript";
//     serverScript.src = "./components/upload.js";
//     document.head.appendChild(serverScript);
// }

document.addEventListener('DOMContentLoaded', () => {
    spf.init();
    renderHeader();
    renderLeftSidebar();
    renderMainContent();
    renderRightSidebar();

    // registerNavLinks();
    // registerBrowserBackAndForth();
    // renderInitialPage();

    // Initialize Lucide icons
    lucide.createIcons();

    const mainContent = document.getElementById('main-content');
    const rightSidebar = document.getElementById('right-sidebar');
    const menuToggle = document.getElementById('menu-toggle');
    const leftSidebar = document.getElementById('left-sidebar');

    menuToggle.addEventListener('click', () => {
        leftSidebar.classList.toggle('open');
    });

    const upload = document.getElementById('upload');

    upload.addEventListener('click', () => {
        if (!!mainContent) mainContent.innerHTML = ``;
        if (!!rightSidebar) rightSidebar.remove();
        renderUpload();
    })

});