import YAML from 'js-yaml';

window.addEventListener('load', () => {
  const yamlInput = document.querySelector('#yaml-input');
  const yamlOutput = document.querySelector('#yaml-output');
  const yamlError = document.querySelector('#yaml-error');

  yamlInput.addEventListener('input', () => {
    try {
      const yaml = YAML.safeLoad(yamlInput.value);
      yamlOutput.value = JSON.stringify(yaml, null, 2);
      yamlError.textContent = '';
    } catch (error) {
      yamlError.textContent = error.message;
    }
  });

  const jsonInput = document.querySelector('#json-input');
  const jsonOutput = document.querySelector('#json-output');
  const jsonError = document.querySelector('#json-error');

  jsonInput.addEventListener('input', () => {
    try {
      const json = JSON.parse(jsonInput.value);
      jsonOutput.value = YAML.safeDump(json, {
        indent: 2
      });
      jsonError.textContent = '';
    } catch (error) {
      jsonError.textContent = error.message;
    }
  });
});
