import { useState, useEffect } from 'react';
import { fetchPopularMemes, generateMeme } from '../api/memeAPI';
import Button from '../components/Button';
import {
  MemeGenContainer,
  MemeGenTitle,
  MemeForm,
  MemeInput,
  MemeTemplateList,
  MemeTemplateItem,
  GeneratedMemeImage
} from '../styles/MemeGeneratorStyles';

const MemeGenerator = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [generatedMeme, setGeneratedMeme] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch meme templates on load
  useEffect(() => {
    const loadTemplates = async () => {
      const memeTemplates = await fetchPopularMemes();
      setTemplates(memeTemplates);
      setLoading(false);
    };
    loadTemplates();
  }, []);

  // Handle meme generation
  const handleGenerateMeme = async () => {
    if (!selectedTemplate) return alert('Please select a meme template first!');
    const memeUrl = await generateMeme(
      selectedTemplate.id,
      topText,
      bottomText,
      'your-username', // Replace with your Imgflip username
      'your-password' // Replace with your Imgflip password
    );
    if (memeUrl) setGeneratedMeme(memeUrl);
  };

  return (
    <MemeGenContainer>
      <MemeGenTitle>🎨 Meme Generator</MemeGenTitle>

      {loading ? (
        <p>Loading meme templates...</p>
      ) : (
        <>
          <MemeTemplateList>
            {templates.map((template) => (
              <MemeTemplateItem
                key={template.id}
                onClick={() => setSelectedTemplate(template)}
                selected={selectedTemplate?.id === template.id}
              >
                <img src={template.url} alt={template.name} />
                <p>{template.name}</p>
              </MemeTemplateItem>
            ))}
          </MemeTemplateList>

          {selectedTemplate && (
            <MemeForm>
              <MemeInput
                placeholder="Top Text"
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
              />
              <MemeInput
                placeholder="Bottom Text"
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value)}
              />
              <Button onClick={handleGenerateMeme}>Generate Meme</Button>
            </MemeForm>
          )}

          {generatedMeme && (
            <GeneratedMemeImage src={generatedMeme} alt="Generated Meme" />
          )}
        </>
      )}
    </MemeGenContainer>
  );
};

export default MemeGenerator;
