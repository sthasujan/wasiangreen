import Question from "../models/Question.js";

// GET all questions
export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().sort({
      createdAt: -1,
    });

    res.json(questions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE question status
export const updateQuestionStatus =
  async (req, res) => {
    try {
      const question =
        await Question.findByIdAndUpdate(
          req.params.id,
          {
            status: req.body.status,
          },
          {
            new: true,
          }
        );

      if (!question) {
        return res.status(404).json({
          message: "Question not found",
        });
      }

      res.json(question);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

// DELETE question
export const deleteQuestion =
  async (req, res) => {
    try {
      const question =
        await Question.findById(
          req.params.id
        );

      if (!question) {
        return res.status(404).json({
          message: "Question not found",
        });
      }

      await question.deleteOne();

      res.json({
        message:
          "Question deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

export const createQuestion =
  async (req, res) => {
    try {
      const question =
        await Question.create({
          name: req.body.name,
          email: req.body.email,
          question:
            req.body.question,
        });

      res.status(201).json(question);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };