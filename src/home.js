export const createHomeView = () => {
  document.body.innerHTML = `<div id="app" class="container-fluid text-center">
    <h1 class="display-1 mb-5">Hello Things!</h1>
    <p class="alert alert-warning mt-4">
        If this text is <b>not</b> centered and <b>yellow</b>, you probably have
        an error
    </p>
    <div class="fixed-bottom p-4">
        Made with ❤️ by
        <a href="https://www.4geeksacademy.com">4Geeks Academy</a>
    </div>
    </div>`;
};
