const panels = document.querySelectorAll('.panel');

const manageTransitions = () => {
  panels.forEach((panel) => {
    panel.addEventListener('click', () => {
      removeActiveClasses(panels);
      addActiveClass(panel);
    });
  });
};

const removeActiveClasses = (panels) => {
  panels.forEach((panel) => panel.classList.remove('active'));
};

const addActiveClass = (panel) => {
  panel.classList.add('active');
};

manageTransitions();
