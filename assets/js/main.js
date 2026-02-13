// ====== INIT ======
initModal();

// ====== FUNCTIONS ======
function initModal() {}

const modalElements = {
  name: document.getElementById("modalName"),
  role: document.getElementById("modalRole"),
  avatar: document.getElementById("modalAvatar"),
  github: document.getElementById("modalGithub"),
  linkedin: document.getElementById("modalLinkedin"),
  codepen: document.getElementById("modalCodepen"),
};

function initModal() {
  const modal = document.getElementById("studentModal");
  if (!modal) return;

  modal.addEventListener("show.bs.modal", (event) => {
    const trigger = event.relatedTarget;

    modalElements.name.textContent = trigger.dataset.name;
    modalElements.role.textContent = trigger.dataset.role;
    modalElements.avatar.src = trigger.dataset.avatar;
    modalElements.github.href = trigger.dataset.github;
    modalElements.linkedin.href = trigger.dataset.linkedin;
    modalElements.codepen.href = trigger.dataset.codepen;
  });
}

// SUPABASE
const { createClient } = supabase;

const supabaseUrl = "https://qjrqiacdojojdubelete.supabase.co";
const supabaseKey = "sb_publishable_fDfSfs9LFoM79Wh_9j-vsg_b-1EyqeE";

const client = createClient(supabaseUrl, supabaseKey);

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const challenge = document.getElementById("challenge").value;
  const solution_url = document.getElementById("solution_url").value;

  const { data, error } = await client
    .from("exercises")
    .insert([{ name, email, challenge, solution_url }]);

  console.log("DATA:", data);
  console.log("ERROR:", error);

  if (error) {
    alert("Error al enviar la tarea.");
  } else {
    alert("Tarea enviada correctamente 🚀");
    form.reset();
  }
});
