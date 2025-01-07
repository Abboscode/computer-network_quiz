# This Python script converts a Markdown file (content.md) to HTML,
# preserving explanation toggles for quiz questions.

import markdown
from bs4 import BeautifulSoup
markdown_file="/home/abbossz/Projects/networks/content.md"

def convert_markdown_to_html(markdown_file):
    """
    Converts a Markdown file to HTML, adding explanation toggle functionality.

    Args:
        markdown_file: Path to the Markdown file.

    Returns:
        The HTML string.
    """

    with open(markdown_file, 'r') as f:
        markdown_text = f.read()

    # Convert Markdown to HTML
    html = markdown.markdown(markdown_text)

    # Parse HTML with BeautifulSoup
    soup = BeautifulSoup(html, 'html.parser')

    # Add explanation toggle functionality
    for explanation in soup.find_all('div', class_='explanation'):
        toggle_button = soup.new_tag('button')
        toggle_button.string = "Show Explanation"
        toggle_button['onclick'] = f"toggleExplanation('{explanation.get('id')}')"
        explanation.insert_before(toggle_button)
        explanation.style.display = 'none'

    # Add JavaScript for toggle functionality
    script = soup.new_tag('script')
    script.string = """
        function toggleExplanation(id) {
            var explanation = document.getElementById(id);
            if (explanation.style.display === "none") {
                explanation.style.display = "block";
            } else {
                explanation.style.display = "none";
            }
        }
    """
    soup.body.append(script)

    return str(soup)

# Generate HTML from content.md
html_output = convert_markdown_to_html('content.md')

# Save the HTML to a file
with open('output.html', 'w') as f:
    f.write(html_output)

print("HTML output saved to output.html")