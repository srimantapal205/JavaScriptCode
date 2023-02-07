document.writeln(`<h1>Print the contents of the current window</h1>`);

document.writeln(`<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit sem a elit ultricies venenatis. Fusce eleifend, massa vitae lacinia auctor, turpis justo accumsan arcu, quis fermentum risus dui vel metus. Maecenas hendrerit turpis in gravida feugiat. Phasellus ac commodo odio.</p><br> <p>Pellentesque a lacus nec ligula varius laoreet. Sed bibendum blandit dolor a efficitur. Pellentesque a vehicula metus. Suspendisse potenti. Curabitur porttitor convallis elit ut auctor.</p>`)

function printCurrentPage() {
    window.print();
}