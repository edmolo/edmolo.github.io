document.getElementById('MoreABLink').addEventListener('click', function() {
    typeText('p4', 'Currently, I am wrapping up undergrad at KU. This summer (2024), I will visit the Iscte University Institute in Lisbon to finish a project I am working on with Dr. Jorge Louca, and Dr. John Symons. The project builds on our shared interest in artificial intelligence by applying language models to social phenomena.', 0);
    typeText('p5', "In tandem to this work with the Center for Cyber Social Dynamics, I am currently conducting two original studies under Dr. Mark Landau's mentorship at KU. The primary study is a survey experiment assessing how exposure to messaging in the online forum, r/collapse, affects the individuals who view it. As of December, we are collecting data. This work will be presented at SPSP in San Diego on February 9th.", 0);
    typeText('p6', 'In the past, I assisted the Ad Astra Institute with a large NSF grant proposal. I conducted the supporting research, wrote the rationale with Prof. Kij Johnson, and then edited our drafts. We argued that having a population with many educated and interested in STEM is important for our future as a society, if for no other reason than being an obstacle to the spread of misinformation about science. We suggested that one way to get young people interested in STEM is through stimulating, yet accurate, science fiction literature. By engaging with science fiction media, we suspect that children will build identities around understanding science, leading to a long-term interest. Thus, we sought funding to support further research towards this end, to  host STEM workshops for creators, and to produce content for a general audience. 0');
    typeText('p7', 'this is the new text for p4', 0);
});

function typeText(elementId, text, index) {
    if (index < text.length) {
        document.getElementById(elementId).textContent += text.charAt(index);
        setTimeout(function() {
            typeText(elementId, text, index + 1);
        }, 50); // Adjust the timing to control the typing speed
    }
}
