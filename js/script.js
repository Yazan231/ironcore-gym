const joinBtn = document.getElementById("joinBtn");
const joinForm = document.getElementById("joinForm");
const submitBtn = document.getElementById("submitBtn");
const formMessage = document.getElementById("formMessage");

// Join button
if (joinBtn && joinForm) {
    joinBtn.addEventListener("click", function() {
        joinForm.style.display = "block";
    });
}

// Submit form
if (submitBtn) {
    submitBtn.addEventListener("click", function() {
        const name = document.getElementById("name").value;
        const plan = document.getElementById("plan").value;

        if (name === "" || plan === "") {
            formMessage.textContent =
                "Please enter your name and choose a membership.";
            return;
        }

        window.location.href = "thank-you.html";
    });
}

// Choose membership plan
const planButtons = document.querySelectorAll(".planBtn");

planButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedPlan = button.dataset.plan;

        window.location.href =
            "index.html?plan=" + selectedPlan;
    });
});

// Get selected plan from URL
const urlParams = new URLSearchParams(window.location.search);
const selectedPlan = urlParams.get("plan");

if (selectedPlan) {
    const planSelect = document.getElementById("plan");

    if (planSelect) {
        planSelect.value = selectedPlan;
    }
}
