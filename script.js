// Data about cosmos and space objects
const cosmosData = {
    mercury: {
        name: "Mercury",
        type: "Planet",
        description: "Mercury is the smallest planet and closest to the Sun. It has extreme temperature variations and a thin atmosphere.",
        facts: [
            "Distance from Sun: 57.9 million km",
            "Size: 4,879 km diameter",
            "Temperature: -173°C to 427°C",
            "One year on Mercury = 88 Earth days"
        ]
    },
    venus: {
        name: "Venus",
        type: "Planet",
        description: "Venus is the hottest planet with a thick, toxic atmosphere. It's similar in size to Earth but completely uninhabitable.",
        facts: [
            "Distance from Sun: 108.2 million km",
            "Size: 12,104 km diameter",
            "Temperature: 464°C (hottest in solar system)",
            "Rotates backwards compared to other planets"
        ]
    },
    earth: {
        name: "Earth",
        type: "Planet",
        description: "Our home planet! Earth is the only known planet to harbor life. It has a perfect balance of conditions for life.",
        facts: [
            "Distance from Sun: 149.6 million km (1 AU)",
            "Size: 12,742 km diameter",
            "Temperature: -88°C to 58°C",
            "70% of Earth's surface is water"
        ]
    },
    mars: {
        name: "Mars",
        type: "Planet",
        description: "Mars is the red planet, named after the Roman god of war. Scientists believe water once flowed on its surface.",
        facts: [
            "Distance from Sun: 227.9 million km",
            "Size: 6,779 km diameter",
            "Temperature: -87°C to -5°C",
            "Has the largest volcano in the solar system (Olympus Mons)"
        ]
    },
    sirius: {
        name: "Sirius",
        type: "Star",
        description: "Sirius is the brightest star in the night sky, located in the constellation Canis Major. It's a binary star system.",
        facts: [
            "Distance from Earth: 8.6 light-years",
            "Brightness: 25 times brighter than the Sun",
            "Type: Main sequence star (A1V)",
            "Surface temperature: 10,000 K"
        ]
    },
    polaris: {
        name: "Polaris",
        type: "Star",
        description: "Polaris is the North Star, used for navigation for centuries. It's located almost directly above Earth's North Pole.",
        facts: [
            "Distance from Earth: 430 light-years",
            "Also called the Pole Star",
            "Part of the Little Bear constellation (Ursa Minor)",
            "Used as a reference point for navigation"
        ]
    },
    betelgeuse: {
        name: "Betelgeuse",
        type: "Star",
        description: "Betelgeuse is a red supergiant star and one of the largest known stars. It's expected to explode as a supernova soon.",
        facts: [
            "Distance from Earth: 640 light-years",
            "Size: 700 times larger than the Sun",
            "Color: Red supergiant",
            "Could go supernova any time in the next 100,000 years"
        ]
    },
    milkyway: {
        name: "Milky Way",
        type: "Galaxy",
        description: "The Milky Way is our home galaxy, a barred spiral galaxy containing 100-400 billion stars including our Sun.",
        facts: [
            "Type: Barred spiral galaxy",
            "Diameter: 100,000 light-years",
            "Contains: 100-400 billion stars",
            "Age: 13.6 billion years"
        ]
    },
    andromeda: {
        name: "Andromeda",
        type: "Galaxy",
        description: "Andromeda is the closest large galaxy to the Milky Way and the most distant object visible to the naked eye.",
        facts: [
            "Distance from Earth: 2.5 million light-years",
            "Type: Spiral galaxy",
            "Size: Similar to or larger than Milky Way",
            "Will collide with Milky Way in 4.5 billion years"
        ]
    },
    whirlpool: {
        name: "Whirlpool Galaxy",
        type: "Galaxy",
        description: "The Whirlpool Galaxy is famous for its beautiful spiral structure. It's a grand-design spiral galaxy.",
        facts: [
            "Distance from Earth: 31 million light-years",
            "Type: Grand-design spiral galaxy",
            "Diameter: 76,000 light-years",
            "Interacting with companion galaxy NGC 205"
        ]
    }
};

// Function to show different sections
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(sectionName);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Clear details when switching sections
    clearDetails();
}

// Function to show details about a cosmos object
function showDetails(objectKey) {
    if (!cosmosData[objectKey]) return;

    const data = cosmosData[objectKey];
    let detailsHtml = `
        <h3>${data.name}</h3>
        <p><strong>Type:</strong> ${data.type}</p>
        <p><strong>Description:</strong> ${data.description}</p>
        <p><strong>Key Facts:</strong></p>
        <ul style="margin-left: 20px;">
    `;

    // Add facts
    data.facts.forEach(fact => {
        detailsHtml += `<li>${fact}</li>`;
    });

    detailsHtml += `</ul>`;

    // Determine which details box to update based on current section
    const planetsSection = document.getElementById('planets');
    const starsSection = document.getElementById('stars');
    const galaxiesSection = document.getElementById('galaxies');

    if (planetsSection.classList.contains('active')) {
        document.getElementById('details').innerHTML = detailsHtml;
    } else if (starsSection.classList.contains('active')) {
        document.getElementById('star-details').innerHTML = detailsHtml;
    } else if (galaxiesSection.classList.contains('active')) {
        document.getElementById('galaxy-details').innerHTML = detailsHtml;
    }
}

// Function to clear all details
function clearDetails() {
    document.getElementById('details').innerHTML = '';
    document.getElementById('star-details').innerHTML = '';
    document.getElementById('galaxy-details').innerHTML = '';
}

// Initialize - show planets section on page load
window.addEventListener('load', () => {
    showSection('planets');
});