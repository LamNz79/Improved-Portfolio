var row = document.getElementById('row');
const PROJECTS = [{
    name: 'Hand-detection-to-control-volume',
    description: `Created by me. Using Python Opencv, mediapipe library to detect user hand track them and get
    hand points.
    Then using that file with sys library to use 2 points of finger to higher or lower the volume`,
    url: 'https://github.com/LamNz79/Hand-detection-to-control-volume',
}, {
    name: 'Hotel-management',
    description: `Team of 3. Using C# with function:
    Register,
    Login,
    Order room,
    Service,
    Main menu (register, login, order room, room management, service),
    Employee management,
    Room management,
    Recipe infomation
    Check out,
    Return room `,
    url: 'https://github.com/LamNz79/Hotel-management',
}, {
    name: 'Music-website',
    description: 'Team of 3. Using nodejs to create a replicate of ZingMP3 music site with login, register, admin panel, album, playlist, user song inventory ',
    url: 'https://github.com/LamNz79/Music-website',
}, {
    name: 'Monopoly game',
    description: 'Team of 3. Using C# try to build a replicate of the famous game monopoly with all the basic function:buy, sell, reward, prison, player movement, cards, changing player',
    url: 'https://github.com/LamNz79/Monopoly-game',
}]


function showingProject(projects, div) {
    projects.forEach(project => {
        row.innerHTML += getProjectTemp(project);
    });
}

function getProjectTemp(item) {
    return `  <div class="col-lg-4 col-md-6">

    <!-- service -->
    <div class="art-a art-service-icon-box">
      <!-- service content -->
      <div class="art-service-ib-content">
        <!-- title -->
        <h5 class="mb-15">${item.name}</h5>
        <!-- text -->
        <div class="mb-15">
          ${item.description}
        </div>
        <!-- button -->
        <div class="art-buttons-frame"><a href="${item.url} "target="_blank"
            class="art-link art-color-link art-w-chevron">Project link</a></div>
      </div>
      <!-- service content end -->
    </div>
    <!-- service end -->`
}

window.addEventListener('load', () => {
    showingProject(PROJECTS)
    console.log('hello world!')
})
