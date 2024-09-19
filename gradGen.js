const GradGen = (function () {
    const gradientTemplates = [
        // Card 1
        "linear-gradient(124.14deg,rgba(255,252,243,0) 20%,rgba(255,252,243,0.2) 39.82%,rgba(255,252,243,0) 60%),radial-gradient(154% 102% at 85% 32.47%,rgba(255,252,243,0) 49.82%,rgba(230,148,247,0.6) 82.11%),radial-gradient(124% 129% at 35% 78.47%,rgba(255,252,243,0) 49.82%,rgba(255,252,243,0.6) 82.11%),radial-gradient(125% 178% at 25% 4.47%,rgba(255,252,243,0) 49.82%,rgba(255,252,243,0.6) 82.11%),radial-gradient(41.58% 150.68% at 26.01% 45.34%,rgba(255,252,243,0.6) 19.17%,rgba(255,252,243,0) 100%),linear-gradient(84.14deg,rgba(230,148,247,0.2) 2.84%,rgba(247,161,166,0.2) 118.515%),radial-gradient(50% 120% at 100% 14.47%,rgba(175,155,241,0) 6.9%,rgba(211,199,248,0.5) 52.84%,rgba(175,155,241,0) 100%),radial-gradient(56% 120% at 90% 112.47%,rgba(255,155,130,0) 26.9%,rgba(255,155,130,0.8) 72.84%,rgba(255,155,130,0) 100%),radial-gradient(35% 68% at 35% 84.47%,#ffaf9b 49.82%,rgba(251,211,199,0) 82.11%),linear-gradient(84.14deg,#e694f7 2.84%,#f7a1a6 118.515%)",
        // Card 2
        "radial-gradient(27.91% 37.23% at 6.91% 7.68%,rgba(200,119,185,0.5) 0,rgba(198,118,185,0) 100%),radial-gradient(53.04% 64.16% at 53.96% 7.14%,rgba(16,154,229,0.7) 0,rgba(125,124,196,0) 93.21%),radial-gradient(69.88% 69.88% at 10.64% 86.96%,#fe014c 0,rgba(223,51,129,0.8) 47.68%,rgba(187,84,133,0.229058) 81.13%,rgba(124,128,200,0) 100%),linear-gradient(90deg,#c877b9 0,#c877b9 31.9%,rgba(200,119,185,0) 83.73%),linear-gradient(180deg,#0aadee 14.98%,#fea5aa 76.19%)",
        // Card 3
        "linear-gradient(124.14deg,rgba(255,252,243,0) 20%,rgba(255,252,243,0.2) 39.82%,rgba(255,252,243,0) 60%),radial-gradient(154% 102% at 85% 32.47%,rgba(255,252,243,0) 49.82%,rgba(230,148,247,0.6) 82.11%),radial-gradient(124% 129% at 35% 78.47%,rgba(255,252,243,0) 49.82%,rgba(255,252,243,0.9) 82.11%),radial-gradient(125% 178% at 25% 4.47%,rgba(255,252,243,0) 49.82%,rgba(255,252,243,0.9) 82.11%),radial-gradient(41.58% 150.68% at 26.01% 45.34%,rgba(255,252,243,0.6) 19.17%,rgba(255,252,243,0) 100%),linear-gradient(84.14deg,rgba(230,148,247,0.2) 2.84%,rgba(247,161,166,0.2) 118.515%),radial-gradient(50% 120% at 100% 14.47%,rgba(175,155,241,0) 26.9%,rgba(211,199,248,0.9) 72.84%,rgba(175,155,241,0) 100%),linear-gradient(95.41deg,rgba(160,218,140,0) 19.21%,#a0da8c 46.15%,#a0da8c 63.7%,rgba(160,218,140,0) 83.72%),radial-gradient(56% 120% at 90% 112.47%,rgba(255,155,130,0) 26.9%,rgba(255,155,130,0.8) 72.84%,rgba(255,155,130,0) 100%),radial-gradient(35% 68% at 35% 84.47%,#ffaf9b 49.82%,rgba(251,211,199,0) 82.11%),linear-gradient(84.14deg,#e694f7 2.84%,#f7a1a6 118.515%)",
        // Card 4
        "linear-gradient(124.14deg,rgba(255,252,243,0) 20%,rgba(255,252,243,0.2) 39.82%,rgba(255,252,243,0) 60%),radial-gradient(154% 102% at 85% 32.47%,rgba(255,252,243,0) 49.82%,rgba(230,148,247,0.6) 82.11%),radial-gradient(124% 129% at 35% 78.47%,rgba(255,252,243,0) 49.82%,rgba(255,252,243,0.6) 82.11%),radial-gradient(125% 178% at 25% 4.47%,rgba(255,252,243,0) 49.82%,rgba(255,252,243,0.6) 82.11%),radial-gradient(41.58% 150.68% at 26.01% 45.34%,rgba(255,252,243,0.6) 19.17%,rgba(255,252,243,0) 100%),linear-gradient(84.14deg,rgba(230,148,247,0.2) 2.84%,rgba(247,161,166,0.2) 118.515%),radial-gradient(50% 120% at 100% 14.47%,rgba(175,155,241,0) 6.9%,rgba(230,195,255,0.5) 52.84%,rgba(175,155,241,0) 100%),radial-gradient(56% 120% at 90% 112.47%,rgba(255,155,130,0) 26.9%,rgba(202,236,189,0.9) 72.84%,rgba(255,155,130,0) 100%),radial-gradient(35% 68% at 35% 84.47%,#ffaf9b 49.82%,rgba(251,211,199,0) 82.11%),linear-gradient(84.14deg,#bedbfa 2.84%,#caecbd 118.515%)",
        // Card 5
        "radial-gradient(circle farthest-corner at top left,rgba(225,243,97,1) 0%,rgba(225,243,97,0) 50%),radial-gradient(circle farthest-side at top right,rgba(181,176,177,1) 0%,rgba(181,176,177,0) 10%),radial-gradient(circle farthest-corner at bottom right,rgba(204,104,119,1) 0%,rgba(204,104,119,0) 33%),radial-gradient(circle farthest-corner at top right,rgba(155,221,240,1) 0%,rgba(155,221,240,0) 50%),radial-gradient(ellipse at bottom center,rgba(254,43,0,1) 0%,rgba(254,43,0,0) 80%)"
    ];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateRandomColor() {
        return `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
    }

    function varyColor(color) {
        const rgbaMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        if (rgbaMatch) {
            const newColor = generateRandomColor();
            const a = rgbaMatch[4] ? parseFloat(rgbaMatch[4]) : 1;
            return newColor.replace('rgb', 'rgba').replace(')', `, ${a})`);
        }
        return color.startsWith('#') ? generateRandomColor() : color;
    }

    function varyGradient(gradient) {
        return gradient.replace(/(#[0-9A-Fa-f]{6}|rgba?\([^)]+\))/g, varyColor);
    }

    // Public methods
    return {
        applyGradient: function (element) {
            let gradient;
            if (element instanceof HTMLElement) {
                const templateIndex = getRandomInt(0, gradientTemplates.length - 1);
                gradient = varyGradient(gradientTemplates[templateIndex]);
                element.style.background = gradient;
            } else if (element instanceof jQuery) {
                const templateIndex = getRandomInt(0, gradientTemplates.length - 1);
                gradient = varyGradient(gradientTemplates[templateIndex]);
                element.css('background', gradient);
            } else {
                console.error('Invalid element type. Please provide a DOM element or jQuery object.');
                return null;
            }
            return gradient; // Return the generated gradient string
        },

        applyGradientToSelector: function (selector) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(this.applyGradient);
        }
    };
})();

// Make the module available globally
if (typeof window !== 'undefined') {
    window.GradGen = GradGen;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GradGen;
}
