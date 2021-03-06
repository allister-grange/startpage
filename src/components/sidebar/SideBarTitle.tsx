import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface SideBarTitleProps {
  textColor: string;
  onSaveHandler: () => void;
  onExitHandler: () => void;
  backgroundColor: string;
  tutorialProgress: number;
}

export const SideBarTitle: React.FC<SideBarTitleProps> = ({
  textColor,
  onSaveHandler,
  onExitHandler,
  backgroundColor,
  tutorialProgress,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      bgColor={backgroundColor}
      py="3"
      borderBottom={`1px solid ${textColor}`}
    >
      <Button
        onClick={onExitHandler}
        bg="gray.400"
        background="transparent"
        border={`1px solid ${textColor}`}
        color={textColor}
        disabled={tutorialProgress > 1 && tutorialProgress < 4}
      >
        Exit
      </Button>
      <Text color={textColor}>Preferences</Text>
      <Button
        onClick={onSaveHandler}
        bg="gray.400"
        background="transparent"
        border={`1px solid ${textColor}`}
        color={textColor}
      >
        Save
      </Button>
    </Box>
  );
};
