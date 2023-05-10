const copyButton = document.getElementById('copy-button');
const textToCopy = document.getElementById('text-to-copy');

copyButton.addEventListener('click', () => {
	navigator.clipboard.writeText(textToCopy.innerText);
	copyButton.innerHTML = 'Text Copied!';
	setTimeout(() => {
		copyButton.innerHTML = 'Copy Text';
	}, 2000);
});
