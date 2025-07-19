export interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  mnemonic: string;
}

export interface QuizCategory {
  title: string;
  description: string;
  mnemonics: Record<string, string>;
  questions: Question[];
}

export interface QuizData {
  [key: string]: QuizCategory;
}

export const quizData: QuizData = {
  "numpy_fundamentals": {
    "title": "NumPy Fundamentals",
    "description": "Test your knowledge of NumPy arrays, operations, and methods",
    "mnemonics": {
      "array_creation": "SHAPE - Size, Helpful, Array, Properties, Elements",
      "operations": "DOT - Data, Operations, Transformations",
      "methods": "MEAN - Methods, Elements, Arrays, Numbers"
    },
    "questions": [
      {
        "question": "What does the .shape attribute tell you about a NumPy array?",
        "options": [
          "The data type of elements",
          "The sizes of all dimensions",
          "The total number of elements",
          "The memory size in bytes"
        ],
        "correct": 1,
        "explanation": "The .shape attribute returns a tuple with the sizes of all dimensions. For a 2D array with 3 rows and 4 columns, .shape would return (3, 4).",
        "mnemonic": "SHAPE - Size, Helpful, Array, Properties, Elements"
      },
      {
        "question": "Which operator gives the dot product of two matrices in NumPy?",
        "options": ["*", "@", "&", "|"],
        "correct": 1,
        "explanation": "The @ operator performs matrix multiplication (dot product) in NumPy. This is more concise than using np.dot().",
        "mnemonic": "DOT - Data, Operations, Transformations"
      },
      {
        "question": "What does np.random.randn() generate?",
        "options": [
          "Uniform distribution between 0 and 1",
          "Normal/Gaussian distribution with mean 0 and std 1",
          "Random integers",
          "Exponential distribution"
        ],
        "correct": 1,
        "explanation": "np.random.randn() generates samples from a normal/Gaussian distribution with mean 0 and standard deviation 1.",
        "mnemonic": "MEAN - Methods, Elements, Arrays, Numbers"
      },
      {
        "question": "How do you add a new dimension to a NumPy array?",
        "options": [
          "Using .add_dimension()",
          "Using .newaxis",
          "Using .reshape() only",
          "Using .expand()"
        ],
        "correct": 1,
        "explanation": "You can use .newaxis to add a new dimension to an array. For example: arr[:, np.newaxis] adds a new axis.",
        "mnemonic": "SHAPE - Size, Helpful, Array, Properties, Elements"
      },
      {
        "question": "What does .argwhere() do?",
        "options": [
          "Returns the indices where a condition is True",
          "Returns the values where a condition is True",
          "Returns the shape of the array",
          "Returns the data type of the array"
        ],
        "correct": 0,
        "explanation": ".argwhere() returns the indices of elements that satisfy a given condition, similar to np.where() but returns indices in a specific format.",
        "mnemonic": "MEAN - Methods, Elements, Arrays, Numbers"
      }
    ]
  },
  "pandas_operations": {
    "title": "Pandas Operations",
    "description": "Master pandas data manipulation and analysis",
    "mnemonics": {
      "data_manipulation": "CRUD - Create, Read, Update, Delete",
      "analysis": "GROUP - Get, Read, Organize, Process, Summarize"
    },
    "questions": [
      {
        "question": "What is the primary data structure in pandas?",
        "options": ["Series", "DataFrame", "Array", "List"],
        "correct": 1,
        "explanation": "DataFrame is the primary 2D data structure in pandas, while Series is 1D. DataFrames are built on top of Series.",
        "mnemonic": "CRUD - Create, Read, Update, Delete"
      },
      {
        "question": "How do you read a CSV file in pandas?",
        "options": [
          "pd.read_csv()",
          "pd.load_csv()",
          "pd.import_csv()",
          "pd.open_csv()"
        ],
        "correct": 0,
        "explanation": "pd.read_csv() is the standard function to read CSV files into a pandas DataFrame.",
        "mnemonic": "CRUD - Create, Read, Update, Delete"
      },
      {
        "question": "What does .groupby() do?",
        "options": [
          "Groups data by specified columns",
          "Sorts data in ascending order",
          "Removes duplicate rows",
          "Merges two DataFrames"
        ],
        "correct": 0,
        "explanation": ".groupby() groups the DataFrame by one or more columns, allowing you to perform operations on each group.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you select rows where a column value is greater than 5?",
        "options": [
          "df[df.column > 5]",
          "df.select(df.column > 5)",
          "df.filter(df.column > 5)",
          "df.where(df.column > 5)"
        ],
        "correct": 0,
        "explanation": "Boolean indexing with df[df.column > 5] is the standard way to filter rows based on column conditions.",
        "mnemonic": "CRUD - Create, Read, Update, Delete"
      },
      {
        "question": "What is the difference between .loc and .iloc?",
        "options": [
          ".loc uses labels, .iloc uses integer positions",
          ".loc uses integer positions, .iloc uses labels",
          ".loc is faster than .iloc",
          "There is no difference"
        ],
        "correct": 0,
        "explanation": ".loc uses labels/names for indexing, while .iloc uses integer positions (0, 1, 2, etc.).",
        "mnemonic": "CRUD - Create, Read, Update, Delete"
      }
    ]
  },
  "prompt_engineering": {
    "title": "Prompt Engineering",
    "description": "Master the art of designing effective prompts for language models",
    "mnemonics": {
      "principles": "CLEAR - Context, Language, Examples, Accuracy, Refinement",
      "techniques": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
    },
    "questions": [
      {
        "question": "What is the role of context in prompt engineering?",
        "options": [
          "To provide background information for the model",
          "To make prompts longer",
          "To confuse the model",
          "To reduce response time"
        ],
        "correct": 0,
        "explanation": "Context provides necessary background information that helps the model understand the task and generate appropriate responses.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'temperature' in LLM settings?",
        "options": [
          "The physical temperature of the model",
          "A parameter that controls randomness in responses",
          "The speed of response generation",
          "The model's processing power"
        ],
        "correct": 1,
        "explanation": "Temperature controls randomness: lower values (0-0.3) make responses more focused, higher values (0.7-1.0) make them more creative.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'prompt chaining'?",
        "options": [
          "Using multiple prompts in sequence to build complex outputs",
          "Connecting different LLM models",
          "Linking prompts with external APIs",
          "Combining multiple responses"
        ],
        "correct": 0,
        "explanation": "Prompt chaining uses multiple prompts in sequence, where the output of one prompt becomes the input for the next.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is the purpose of 'system prompts'?",
        "options": [
          "To set the overall behavior and role of the model",
          "To provide technical instructions",
          "To configure the model's settings",
          "To initialize the model"
        ],
        "correct": 0,
        "explanation": "System prompts define the model's role, behavior, and constraints for the entire conversation.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'zero-shot learning' in prompt engineering?",
        "options": [
          "Asking the model to do a task without any examples",
          "Using zero examples in the prompt",
          "Training the model from scratch",
          "Resetting the model's parameters"
        ],
        "correct": 0,
        "explanation": "Zero-shot learning asks the model to perform a task without providing any examples, relying on its pre-trained knowledge.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      }
    ]
  },
  "ml_fundamentals": {
    "title": "ML Fundamentals",
    "description": "Core concepts in machine learning and inference",
    "mnemonics": {
      "workflow": "TRAIN - Test, Run, Analyze, Iterate, Normalize",
      "concepts": "MODEL - Machine, Output, Data, Evaluation, Learning"
    },
    "questions": [
      {
        "question": "What is the difference between training and inference?",
        "options": [
          "Training is faster than inference",
          "Training learns patterns, inference applies them",
          "Inference is more accurate than training",
          "They are the same process"
        ],
        "correct": 1,
        "explanation": "Training is the process of learning patterns from data, while inference is applying the learned model to make predictions on new data.",
        "mnemonic": "TRAIN - Test, Run, Analyze, Iterate, Normalize"
      },
      {
        "question": "What is overfitting?",
        "options": [
          "When a model performs too well on training data",
          "When a model learns the training data too well but fails on new data",
          "When a model is too simple",
          "When a model has too many parameters"
        ],
        "correct": 1,
        "explanation": "Overfitting occurs when a model learns the training data too well, including noise, and fails to generalize to new, unseen data.",
        "mnemonic": "MODEL - Machine, Output, Data, Evaluation, Learning"
      },
      {
        "question": "What is cross-validation used for?",
        "options": [
          "To make models faster",
          "To evaluate model performance more reliably",
          "To reduce model complexity",
          "To increase training data"
        ],
        "correct": 1,
        "explanation": "Cross-validation provides a more reliable estimate of model performance by testing on multiple train-test splits.",
        "mnemonic": "TRAIN - Test, Run, Analyze, Iterate, Normalize"
      },
      {
        "question": "What is the bias-variance tradeoff?",
        "options": [
          "A tradeoff between model complexity and generalization",
          "A tradeoff between training time and accuracy",
          "A tradeoff between data size and model size",
          "A tradeoff between memory usage and speed"
        ],
        "correct": 0,
        "explanation": "The bias-variance tradeoff balances model complexity (high variance, low bias) with simplicity (low variance, high bias) for optimal generalization.",
        "mnemonic": "MODEL - Machine, Output, Data, Evaluation, Learning"
      },
      {
        "question": "What is regularization in machine learning?",
        "options": [
          "A technique to prevent overfitting",
          "A technique to speed up training",
          "A technique to increase model accuracy",
          "A technique to reduce data size"
        ],
        "correct": 0,
        "explanation": "Regularization adds constraints to the model to prevent overfitting by penalizing complex models.",
        "mnemonic": "TRAIN - Test, Run, Analyze, Iterate, Normalize"
      }
    ]
  },
  "spatial_data": {
    "title": "Spatial Data & Vectors",
    "description": "Understanding data in vector spaces and spatial relationships",
    "mnemonics": {
      "concepts": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings",
      "operations": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
    },
    "questions": [
      {
        "question": "What is a vector space in the context of data?",
        "options": [
          "A physical space with coordinates",
          "A mathematical space where data points can be represented as vectors",
          "A database for storing vectors",
          "A visualization tool"
        ],
        "correct": 1,
        "explanation": "A vector space is a mathematical space where data points can be represented as vectors, allowing for geometric operations and similarity calculations.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is the purpose of embeddings in machine learning?",
        "options": [
          "To make data smaller",
          "To represent data in a vector space for similarity and operations",
          "To encrypt data",
          "To compress images"
        ],
        "correct": 1,
        "explanation": "Embeddings convert data (like text, images) into vector representations that capture semantic meaning and enable similarity calculations.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "How is similarity typically measured between vectors?",
        "options": [
          "By counting elements",
          "Using distance metrics like cosine similarity or Euclidean distance",
          "By comparing data types",
          "By measuring file size"
        ],
        "correct": 1,
        "explanation": "Similarity between vectors is measured using distance metrics like cosine similarity, Euclidean distance, or Manhattan distance.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is cosine similarity?",
        "options": [
          "The cosine of the angle between two vectors",
          "The Euclidean distance between vectors",
          "The dot product of vectors",
          "The magnitude of vectors"
        ],
        "correct": 0,
        "explanation": "Cosine similarity measures the cosine of the angle between two vectors, ranging from -1 to 1, where 1 indicates identical direction.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is dimensionality reduction?",
        "options": [
          "Reducing the number of features while preserving important information",
          "Making vectors smaller",
          "Deleting data points",
          "Compressing files"
        ],
        "correct": 0,
        "explanation": "Dimensionality reduction reduces the number of features while preserving the most important information and relationships in the data.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      }
    ]
  }
}; 