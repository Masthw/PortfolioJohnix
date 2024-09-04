import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "./styles/typingText.css"; 

const words = ["Photographer", "Filmmaker", "Visual Storyteller"];

const TypingText = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentChar((prevChar) => {
        if (prevChar < words[currentWord].length) {
          return prevChar + 1;
        } else {
          return prevChar;
        }
      });
    }, 150); // Ajuste a velocidade da digitação aqui

    return () => clearInterval(typingInterval);
  }, [currentWord]);

  useEffect(() => {
    if (currentChar === words[currentWord].length) {
      const switchWordInterval = setInterval(() => {
        setCurrentWord((prevWord) => (prevWord + 1) % words.length);
        setCurrentChar(0); 
      }, 3000); 

      return () => clearInterval(switchWordInterval);
    }
  }, [currentChar]);


  return (
    <Typography
      color="primary.contrastText"
      variant="h2"
      className="typing-container"
      sx={{
        fontSize: {
          xs: "2rem", 
          md: "3rem",   
        },
        marginTop: "20px",
        minHeight: "5rem",
      }}
    >
      <span className="typing-text">
        {words[currentWord].substring(0, currentChar)}
      </span>
    </Typography>
  );
};

export default TypingText;
