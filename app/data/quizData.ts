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
      },
      {
        "question": "What is the difference between np.array() and np.asarray()?",
        "options": [
          "np.array() always creates a copy, np.asarray() doesn't",
          "np.asarray() always creates a copy, np.array() doesn't",
          "np.array() is faster than np.asarray()",
          "There is no difference between them"
        ],
        "correct": 0,
        "explanation": "np.array() always creates a copy of the input, while np.asarray() only creates a copy if necessary (e.g., if the input is not already a NumPy array).",
        "mnemonic": "SHAPE - Size, Helpful, Array, Properties, Elements"
      },
      {
        "question": "What does broadcasting mean in NumPy?",
        "options": [
          "Sending arrays over the network",
          "Automatically expanding arrays to compatible shapes for operations",
          "Converting arrays to different data types",
          "Sorting arrays in ascending order"
        ],
        "correct": 1,
        "explanation": "Broadcasting allows NumPy to perform operations on arrays of different shapes by automatically expanding them to compatible shapes.",
        "mnemonic": "DOT - Data, Operations, Transformations"
      },
      {
        "question": "How do you create an identity matrix in NumPy?",
        "options": [
          "np.identity(n)",
          "np.eye(n)",
          "np.ones((n,n))",
          "Both np.identity(n) and np.eye(n)"
        ],
        "correct": 3,
        "explanation": "Both np.identity(n) and np.eye(n) create identity matrices. np.eye() is more flexible as it allows specifying the diagonal offset.",
        "mnemonic": "MEAN - Methods, Elements, Arrays, Numbers"
      },
      {
        "question": "What does np.linalg.eig() return?",
        "options": [
          "Only eigenvalues",
          "Only eigenvectors",
          "Both eigenvalues and eigenvectors",
          "The determinant of the matrix"
        ],
        "correct": 2,
        "explanation": "np.linalg.eig() returns both eigenvalues and eigenvectors of a square matrix as a tuple.",
        "mnemonic": "MEAN - Methods, Elements, Arrays, Numbers"
      },
      {
        "question": "How do you find the maximum value in a NumPy array?",
        "options": [
          "array.max()",
          "np.max(array)",
          "array.maximum()",
          "Both array.max() and np.max(array)"
        ],
        "correct": 3,
        "explanation": "Both array.max() and np.max(array) find the maximum value. The method form is more concise, while the function form is more explicit.",
        "mnemonic": "MEAN - Methods, Elements, Arrays, Numbers"
      },
      {
        "question": "What does np.arange() do?",
        "options": [
          "Creates an array with evenly spaced values",
          "Creates a random array",
          "Creates an array of zeros",
          "Creates an array of ones"
        ],
        "correct": 0,
        "explanation": "np.arange() creates an array with evenly spaced values within a given interval.",
        "mnemonic": "SHAPE - Size, Helpful, Array, Properties, Elements"
      },
      {
        "question": "What is the difference between np.random.rand() and np.random.randn()?",
        "options": [
          "rand() is uniform [0,1), randn() is normal distribution",
          "rand() is normal distribution, randn() is uniform",
          "rand() is faster than randn()",
          "There is no difference"
        ],
        "correct": 0,
        "explanation": "np.random.rand() generates uniform distribution between 0 and 1, while np.random.randn() generates normal distribution with mean 0 and std 1.",
        "mnemonic": "MEAN - Methods, Elements, Arrays, Numbers"
      },
      {
        "question": "How do you concatenate arrays in NumPy?",
        "options": [
          "np.concatenate()",
          "np.join()",
          "np.merge()",
          "np.combine()"
        ],
        "correct": 0,
        "explanation": "np.concatenate() joins arrays along an existing axis, while np.hstack() and np.vstack() are convenient alternatives.",
        "mnemonic": "DOT - Data, Operations, Transformations"
      },
      {
        "question": "What does .flatten() do to a NumPy array?",
        "options": [
          "Converts to 1D array",
          "Makes array larger",
          "Sorts the array",
          "Reverses the array"
        ],
        "correct": 0,
        "explanation": ".flatten() converts a multi-dimensional array into a 1D array, while .ravel() does the same but may return a view.",
        "mnemonic": "SHAPE - Size, Helpful, Array, Properties, Elements"
      },
      {
        "question": "How do you find the indices of the maximum value?",
        "options": [
          "np.argmax()",
          "np.max_index()",
          "np.find_max()",
          "np.index_max()"
        ],
        "correct": 0,
        "explanation": "np.argmax() returns the indices of the maximum value along a specified axis.",
        "mnemonic": "MEAN - Methods, Elements, Arrays, Numbers"
      },
      {
        "question": "What is the purpose of np.where()?",
        "options": [
          "Returns indices where condition is True",
          "Returns values where condition is True",
          "Returns both indices and values",
          "Returns the condition itself"
        ],
        "correct": 0,
        "explanation": "np.where() returns the indices where the given condition is True.",
        "mnemonic": "MEAN - Methods, Elements, Arrays, Numbers"
      },
      {
        "question": "How do you create a diagonal matrix?",
        "options": [
          "np.diag()",
          "np.diagonal()",
          "np.diag_matrix()",
          "np.diagonal_matrix()"
        ],
        "correct": 0,
        "explanation": "np.diag() can extract the diagonal of a matrix or create a diagonal matrix from a 1D array.",
        "mnemonic": "MEAN - Methods, Elements, Arrays, Numbers"
      },
      {
        "question": "What does np.unique() do?",
        "options": [
          "Returns unique elements in sorted order",
          "Returns unique elements in original order",
          "Returns all elements",
          "Returns sorted elements"
        ],
        "correct": 0,
        "explanation": "np.unique() returns the sorted unique elements of an array.",
        "mnemonic": "MEAN - Methods, Elements, Arrays, Numbers"
      },
      {
        "question": "How do you calculate the mean of an array?",
        "options": [
          "array.mean()",
          "np.mean(array)",
          "array.average()",
          "Both array.mean() and np.mean(array)"
        ],
        "correct": 3,
        "explanation": "Both array.mean() and np.mean(array) calculate the arithmetic mean of array elements.",
        "mnemonic": "MEAN - Methods, Elements, Arrays, Numbers"
      },
      {
        "question": "Which NumPy function creates an array filled with zeros?",
        "options": [
          "np.zeros()",
          "np.empty()",
          "np.ones()",
          "np.full()"
        ],
        "correct": 0,
        "explanation": "np.zeros() creates a new array of the given shape and type, filled with zeros.",
        "mnemonic": "ZERO - Zeros Everywhere, Ready Option"
      },
      {
        "question": "How do you change the data type of a NumPy array?",
        "options": [
          "array.astype(new_type)",
          "array.change_type(new_type)",
          "array.set_type(new_type)",
          "array.dtype(new_type)"
        ],
        "correct": 0,
        "explanation": "The .astype() method returns a copy of the array cast to the specified type.",
        "mnemonic": "ASTYPE - Assign Specific TYPE"
      },
      {
        "question": "What does np.linspace(0, 1, 5) return?",
        "options": [
          "An array of 5 evenly spaced values from 0 to 1, inclusive",
          "An array of 5 random values between 0 and 1",
          "An array of 5 zeros",
          "An array of 5 ones"
        ],
        "correct": 0,
        "explanation": "np.linspace(start, stop, num) returns num evenly spaced samples, calculated over the interval [start, stop].",
        "mnemonic": "LINE - LINear Evenly-spaced"
      },
      {
        "question": "Which method flattens a multi-dimensional array in-place?",
        "options": [
          "array.ravel()",
          "array.flatten()",
          "array.squeeze()",
          "array.reshape(-1)"
        ],
        "correct": 0,
        "explanation": "array.ravel() returns a flattened array and returns a view whenever possible, not a copy.",
        "mnemonic": "RAVEL - Reduce Array to Very Easy Layout"
      },
      {
        "question": "How do you stack arrays vertically in NumPy?",
        "options": [
          "np.vstack()",
          "np.hstack()",
          "np.stack()",
          "np.concatenate()"
        ],
        "correct": 0,
        "explanation": "np.vstack() stacks arrays in sequence vertically (row wise).",
        "mnemonic": "VSTACK - Vertical STACK"
      },
      {
        "question": "What does np.unique(array) return?",
        "options": [
          "The unique elements of the array",
          "The shape of the array",
          "The sum of the array",
          "The sorted array"
        ],
        "correct": 0,
        "explanation": "np.unique() finds the unique elements of an array and returns them sorted.",
        "mnemonic": "UNIQUE - Unrepeatable Numbers In Quick Unique Extraction"
      },
      {
        "question": "Which function computes the cumulative sum of array elements?",
        "options": [
          "np.cumsum()",
          "np.sum()",
          "np.add()",
          "np.accumulate()"
        ],
        "correct": 0,
        "explanation": "np.cumsum() returns the cumulative sum of the elements along a given axis.",
        "mnemonic": "CUMSUM - CUMulative SUM"
      },
      {
        "question": "How do you select all elements greater than 5 in a NumPy array 'a'?",
        "options": [
          "a[a > 5]",
          "a.select(5)",
          "a.where(5)",
          "a.filter(5)"
        ],
        "correct": 0,
        "explanation": "Boolean indexing allows you to select elements that satisfy a condition: a[a > 5].",
        "mnemonic": "BOOL - Boolean Operations On List"
      },
      {
        "question": "What does np.dot(a, b) compute?",
        "options": [
          "Dot product of a and b",
          "Element-wise multiplication",
          "Matrix inversion",
          "Matrix addition"
        ],
        "correct": 0,
        "explanation": "np.dot() computes the dot product of two arrays.",
        "mnemonic": "DOT - Direct Operation of Tensors"
      },
      {
        "question": "How do you get the diagonal elements of a 2D array?",
        "options": [
          "np.diag(array)",
          "array.diagonal()",
          "np.trace(array)",
          "array.get_diagonal()"
        ],
        "correct": 0,
        "explanation": "np.diag() extracts the diagonal elements of a 2D array.",
        "mnemonic": "DIAG - DIAGonal elements"
      },
      {
        "question": "Which function returns the indices that would sort an array?",
        "options": [
          "np.argsort()",
          "np.sort_indices()",
          "np.index_sort()",
          "np.sorted()"
        ],
        "correct": 0,
        "explanation": "np.argsort() returns the indices that would sort an array.",
        "mnemonic": "ARGSORT - ARGument for SORTing"
      },
      {
        "question": "How do you check if any element in an array is True?",
        "options": [
          "np.any(array)",
          "np.all(array)",
          "array.any()",
          "array.exists()"
        ],
        "correct": 0,
        "explanation": "np.any() returns True if any element of the array is True.",
        "mnemonic": "ANY - At least oNe Yes"
      },
      {
        "question": "What does np.tile(array, reps) do?",
        "options": [
          "Constructs an array by repeating the input array",
          "Tiles the array with zeros",
          "Creates a tiled plot",
          "Returns the shape of the array"
        ],
        "correct": 0,
        "explanation": "np.tile() constructs a new array by repeating the input array the number of times given by reps.",
        "mnemonic": "TILE - Times It Loops Elements"
      },
      {
        "question": "How do you save a NumPy array to a binary file?",
        "options": [
          "np.save('filename.npy', array)",
          "np.write('filename.npy', array)",
          "np.export('filename.npy', array)",
          "np.tofile('filename.npy', array)"
        ],
        "correct": 0,
        "explanation": "np.save() saves an array to a binary file in .npy format.",
        "mnemonic": "SAVE - Store Array in Valuable Extension"
      },
      {
        "question": "Which function loads a .npy file?",
        "options": [
          "np.load()",
          "np.open()",
          "np.read()",
          "np.import()"
        ],
        "correct": 0,
        "explanation": "np.load() loads arrays or pickled objects from .npy, .npz files.",
        "mnemonic": "LOAD - Load Object Array Data"
      },
      {
        "question": "How do you get the number of dimensions of a NumPy array?",
        "options": [
          "array.ndim",
          "array.shape",
          "array.size",
          "array.length"
        ],
        "correct": 0,
        "explanation": "The .ndim attribute returns the number of array dimensions.",
        "mnemonic": "NDIM - Number of DIMensions"
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
      },
      {
        "question": "How do you handle missing values in pandas?",
        "options": [
          "df.dropna() removes rows with missing values",
          "df.fillna() fills missing values",
          "df.isna() checks for missing values",
          "All of the above"
        ],
        "correct": 3,
        "explanation": "All three methods are used for handling missing values: dropna() removes, fillna() fills, and isna() checks for missing values.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "What does pd.merge() do?",
        "options": [
          "Combines DataFrames based on common columns",
          "Concatenates DataFrames vertically",
          "Splits a DataFrame into multiple parts",
          "Sorts a DataFrame by columns"
        ],
        "correct": 0,
        "explanation": "pd.merge() combines DataFrames based on common columns (like SQL JOIN), while pd.concat() concatenates them.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you create a pivot table in pandas?",
        "options": [
          "df.pivot_table()",
          "df.pivot()",
          "df.groupby().pivot()",
          "pd.pivot_table(df)"
        ],
        "correct": 3,
        "explanation": "pd.pivot_table(df) is the function to create pivot tables, while df.pivot() is for simpler reshaping operations.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "What is the purpose of .apply() in pandas?",
        "options": [
          "Apply a function to each element or row/column",
          "Apply formatting to the DataFrame",
          "Apply filters to the data",
          "Apply sorting to the DataFrame"
        ],
        "correct": 0,
        "explanation": ".apply() applies a function to each element, row, or column of a DataFrame or Series.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you save a DataFrame to a CSV file?",
        "options": [
          "df.to_csv('filename.csv')",
          "df.save_csv('filename.csv')",
          "df.export_csv('filename.csv')",
          "pd.save_csv(df, 'filename.csv')"
        ],
        "correct": 0,
        "explanation": "df.to_csv('filename.csv') is the standard method to save a DataFrame to a CSV file.",
        "mnemonic": "CRUD - Create, Read, Update, Delete"
      },
      {
        "question": "What is the difference between .head() and .tail()?",
        "options": [
          ".head() shows first rows, .tail() shows last rows",
          ".head() shows last rows, .tail() shows first rows",
          ".head() shows columns, .tail() shows rows",
          "There is no difference"
        ],
        "correct": 0,
        "explanation": ".head() displays the first n rows (default 5), while .tail() displays the last n rows.",
        "mnemonic": "CRUD - Create, Read, Update, Delete"
      },
      {
        "question": "How do you rename columns in a DataFrame?",
        "options": [
          "df.rename(columns={'old': 'new'})",
          "df.columns = ['new1', 'new2']",
          "df.rename_columns()",
          "All of the above"
        ],
        "correct": 3,
        "explanation": "All methods can rename columns: rename() for specific changes, direct assignment for all columns.",
        "mnemonic": "CRUD - Create, Read, Update, Delete"
      },
      {
        "question": "What does .describe() do?",
        "options": [
          "Generates descriptive statistics",
          "Describes the DataFrame structure",
          "Shows data types",
          "Displays column names"
        ],
        "correct": 0,
        "explanation": ".describe() generates descriptive statistics including count, mean, std, min, max, and quartiles.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you check for duplicate rows?",
        "options": [
          "df.duplicated()",
          "df.check_duplicates()",
          "df.find_duplicates()",
          "df.repeated()"
        ],
        "correct": 0,
        "explanation": "df.duplicated() returns a boolean Series indicating duplicate rows.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "What is the purpose of .value_counts()?",
        "options": [
          "Counts unique values in a Series",
          "Counts total values",
          "Counts missing values",
          "Counts rows"
        ],
        "correct": 0,
        "explanation": ".value_counts() returns a Series containing counts of unique values in descending order.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you create a Series from a list?",
        "options": [
          "pd.Series(list)",
          "pd.Series.from_list(list)",
          "pd.create_series(list)",
          "pd.list_to_series(list)"
        ],
        "correct": 0,
        "explanation": "pd.Series(list) creates a Series from a list, with optional index parameter.",
        "mnemonic": "CRUD - Create, Read, Update, Delete"
      },
      {
        "question": "What does .sort_values() do?",
        "options": [
          "Sorts DataFrame by column values",
          "Sorts DataFrame by index",
          "Sorts DataFrame by row numbers",
          "Sorts DataFrame by data types"
        ],
        "correct": 0,
        "explanation": ".sort_values() sorts a DataFrame by the values in one or more columns.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you check data types of columns?",
        "options": [
          "df.dtypes",
          "df.types",
          "df.data_types",
          "df.column_types"
        ],
        "correct": 0,
        "explanation": "df.dtypes returns a Series with the data type of each column.",
        "mnemonic": "CRUD - Create, Read, Update, Delete"
      },
      {
        "question": "What is the purpose of .info()?",
        "options": [
          "Shows DataFrame information and data types",
          "Shows only data types",
          "Shows only column names",
          "Shows only row count"
        ],
        "correct": 0,
        "explanation": ".info() provides a concise summary of a DataFrame including data types and non-null counts.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you drop columns from a DataFrame?",
        "options": [
          "df.drop(columns=['col1', 'col2'])",
          "df.remove_columns(['col1', 'col2'])",
          "df.delete_columns(['col1', 'col2'])",
          "df.drop_columns(['col1', 'col2'])"
        ],
        "correct": 0,
        "explanation": "df.drop(columns=['col1', 'col2']) removes specified columns from the DataFrame.",
        "mnemonic": "CRUD - Create, Read, Update, Delete"
      },
      {
        "question": "What does .nunique() return?",
        "options": [
          "Number of unique values in a column",
          "Number of null values",
          "Number of total values",
          "Number of duplicate values"
        ],
        "correct": 0,
        "explanation": ".nunique() returns the number of unique values in a Series or DataFrame column.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you concatenate DataFrames vertically?",
        "options": [
          "pd.concat([df1, df2], axis=0)",
          "pd.concat([df1, df2], axis=1)",
          "pd.merge([df1, df2])",
          "pd.join([df1, df2])"
        ],
        "correct": 0,
        "explanation": "pd.concat([df1, df2], axis=0) stacks DataFrames vertically (rows).",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "What is the purpose of .astype() in pandas?",
        "options": [
          "Convert data types of columns",
          "Convert DataFrame to array",
          "Convert DataFrame to list",
          "Convert DataFrame to dictionary"
        ],
        "correct": 0,
        "explanation": ".astype() converts the data type of DataFrame columns to specified types.",
        "mnemonic": "CRUD - Create, Read, Update, Delete"
      },
      {
        "question": "How do you calculate the correlation between columns?",
        "options": [
          "df.corr()",
          "df.correlation()",
          "df.correlate()",
          "df.corr_matrix()"
        ],
        "correct": 0,
        "explanation": "df.corr() computes the correlation matrix between numeric columns.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "What does .pct_change() calculate?",
        "options": [
          "Percentage change between consecutive values",
          "Percentage of total values",
          "Percentage of missing values",
          "Percentage of unique values"
        ],
        "correct": 0,
        "explanation": ".pct_change() calculates the percentage change between consecutive values in a Series.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you create a DataFrame from a dictionary?",
        "options": [
          "pd.DataFrame(dict)",
          "pd.create_dataframe(dict)",
          "pd.dict_to_df(dict)",
          "pd.from_dict(dict)"
        ],
        "correct": 0,
        "explanation": "pd.DataFrame(dict) creates a DataFrame where dictionary keys become column names.",
        "mnemonic": "CRUD - Create, Read, Update, Delete"
      },
      {
        "question": "What is the purpose of .query() method?",
        "options": [
          "Filter DataFrame using string expressions",
          "Query external databases",
          "Search for specific values",
          "Ask questions about data"
        ],
        "correct": 0,
        "explanation": ".query() allows filtering DataFrames using string expressions, similar to SQL WHERE clauses.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you calculate rolling statistics?",
        "options": [
          "df.rolling(window=3).mean()",
          "df.roll(window=3).mean()",
          "df.moving(window=3).mean()",
          "df.sliding(window=3).mean()"
        ],
        "correct": 0,
        "explanation": "df.rolling(window=3).mean() calculates rolling mean with a window of 3 periods.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "What does .melt() do?",
        "options": [
          "Transforms wide format to long format",
          "Transforms long format to wide format",
          "Melts data into liquid form",
          "Combines multiple DataFrames"
        ],
        "correct": 0,
        "explanation": ".melt() transforms a DataFrame from wide format to long format, useful for data reshaping.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you check if values are in a specified list?",
        "options": [
          "df['column'].isin([list])",
          "df['column'].contains([list])",
          "df['column'].in_list([list])",
          "df['column'].has([list])"
        ],
        "correct": 0,
        "explanation": "df['column'].isin([list]) returns a boolean Series indicating whether each element is in the specified list.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you calculate the median of a column?",
        "options": [
          "df['column'].median()",
          "df['column'].mean()",
          "df['column'].mode()",
          "df['column'].average()"
        ],
        "correct": 0,
        "explanation": "df['column'].median() calculates the median (middle value) of the column.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "What does .nlargest() do?",
        "options": [
          "Returns the n largest values",
          "Returns the n smallest values",
          "Returns the n most frequent values",
          "Returns the n unique values"
        ],
        "correct": 0,
        "explanation": ".nlargest(n) returns the n largest values from a Series or DataFrame.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you calculate the standard deviation?",
        "options": [
          "df['column'].std()",
          "df['column'].var()",
          "df['column'].dev()",
          "df['column'].stdev()"
        ],
        "correct": 0,
        "explanation": "df['column'].std() calculates the standard deviation of the column values.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "What does .nsmallest() do?",
        "options": [
          "Returns the n smallest values",
          "Returns the n largest values",
          "Returns the n most frequent values",
          "Returns the n unique values"
        ],
        "correct": 0,
        "explanation": ".nsmallest(n) returns the n smallest values from a Series or DataFrame.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you check if a DataFrame is empty?",
        "options": [
          "df.empty",
          "df.is_empty()",
          "df.size == 0",
          "len(df) == 0"
        ],
        "correct": 0,
        "explanation": "df.empty returns True if the DataFrame has no rows or columns.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "What does .memory_usage() do?",
        "options": [
          "Returns memory usage of DataFrame columns",
          "Returns memory usage of the entire DataFrame",
          "Optimizes memory usage",
          "Frees up memory"
        ],
        "correct": 0,
        "explanation": ".memory_usage() returns the memory usage of each column in bytes.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you create a copy of a DataFrame?",
        "options": [
          "df.copy()",
          "df.clone()",
          "df.duplicate()",
          "df.replicate()"
        ],
        "correct": 0,
        "explanation": "df.copy() creates a copy of the DataFrame, with options for deep or shallow copying.",
        "mnemonic": "CRUD - Create, Read, Update, Delete"
      },
      {
        "question": "What does df.pivot_table() do?",
        "options": [
          "Creates a pivot table with aggregation functions",
          "Pivots the DataFrame around index values",
          "Rotates the DataFrame 90 degrees",
          "Creates a table of pivot points"
        ],
        "correct": 0,
        "explanation": "df.pivot_table() creates a spreadsheet-style pivot table with aggregation functions applied to the data.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
      },
      {
        "question": "How do you remove rows with missing values?",
        "options": [
          "df.dropna()",
          "df.remove_na()",
          "df.delete_null()",
          "df.clean_missing()"
        ],
        "correct": 0,
        "explanation": "df.dropna() removes rows (or columns) that contain missing values (NaN).",
        "mnemonic": "CRUD - Create, Read, Update, Delete"
      },
      {
        "question": "What is the difference between df.loc[] and df.iloc[]?",
        "options": [
          "df.loc[] uses labels, df.iloc[] uses integer positions",
          "df.iloc[] uses labels, df.loc[] uses integer positions",
          "They are identical functions",
          "df.loc[] is faster than df.iloc[]"
        ],
        "correct": 0,
        "explanation": "df.loc[] is label-based data selection, while df.iloc[] is integer position-based data selection.",
        "mnemonic": "CRUD - Create, Read, Update, Delete"
      },
      {
        "question": "How do you apply a function to each group in a GroupBy object?",
        "options": [
          "grouped.apply(func)",
          "grouped.map(func)",
          "grouped.transform(func)",
          "All of the above"
        ],
        "correct": 3,
        "explanation": "GroupBy objects support apply(), map(), and transform() methods, each with different behaviors for applying functions to groups.",
        "mnemonic": "GROUP - Get, Read, Organize, Process, Summarize"
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
      },
      {
        "question": "What is 'few-shot learning' in prompt engineering?",
        "options": [
          "Using many examples in a prompt",
          "Using a few examples to guide the model",
          "Learning from mistakes",
          "Using short prompts only"
        ],
        "correct": 1,
        "explanation": "Few-shot learning involves providing a few examples in the prompt to guide the model's behavior and improve its performance.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'chain-of-thought' prompting?",
        "options": [
          "Asking the model to show its reasoning process",
          "Chaining multiple prompts together",
          "Using prompts in sequence",
          "Connecting different models"
        ],
        "correct": 0,
        "explanation": "Chain-of-thought prompting asks the model to show its step-by-step reasoning process, which often improves accuracy.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'role prompting'?",
        "options": [
          "Asking the model to act as a specific character or expert",
          "Assigning roles to different models",
          "Creating role-based access control",
          "Defining user roles in the system"
        ],
        "correct": 0,
        "explanation": "Role prompting asks the model to adopt a specific persona or expertise to improve performance on certain tasks.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'instruction tuning'?",
        "options": [
          "Training models to follow instructions more precisely",
          "Tuning the temperature parameter",
          "Adjusting prompt instructions",
          "Fine-tuning model parameters"
        ],
        "correct": 0,
        "explanation": "Instruction tuning is a training technique that improves a model's ability to follow instructions and perform tasks.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'prompt injection'?",
        "options": [
          "A security vulnerability where malicious prompts override system instructions",
          "Injecting code into prompts",
          "Adding variables to prompts",
          "Inserting examples into prompts"
        ],
        "correct": 0,
        "explanation": "Prompt injection is a security concern where malicious input can override the intended system behavior.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'retrieval-augmented generation' (RAG)?",
        "options": [
          "Combining retrieval of relevant documents with text generation",
          "Retrieving old prompts",
          "Generating retrieval queries",
          "Augmenting prompts with data"
        ],
        "correct": 0,
        "explanation": "RAG combines information retrieval with text generation to provide more accurate and up-to-date responses.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'conversational AI'?",
        "options": [
          "AI systems designed for natural dialogue",
          "AI that only speaks",
          "AI for voice recognition",
          "AI for text-to-speech"
        ],
        "correct": 0,
        "explanation": "Conversational AI refers to systems designed to engage in natural, human-like dialogue.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'prompt optimization'?",
        "options": [
          "Systematically improving prompts for better performance",
          "Making prompts shorter",
          "Making prompts longer",
          "Changing prompt format"
        ],
        "correct": 0,
        "explanation": "Prompt optimization involves systematically testing and improving prompts to achieve better results.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'conversation memory' in LLMs?",
        "options": [
          "The model's ability to remember previous parts of a conversation",
          "Computer memory for conversations",
          "Human memory of conversations",
          "Storage of conversation data"
        ],
        "correct": 0,
        "explanation": "Conversation memory allows the model to maintain context and refer back to earlier parts of the dialogue.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'bias mitigation' in prompt engineering?",
        "options": [
          "Reducing unwanted biases in model outputs",
          "Adding bias to prompts",
          "Measuring bias in models",
          "Creating biased prompts"
        ],
        "correct": 0,
        "explanation": "Bias mitigation involves designing prompts that reduce harmful or unwanted biases in model responses.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'prompt engineering for code generation'?",
        "options": [
          "Designing prompts specifically for generating code",
          "Engineering code for prompts",
          "Generating prompts from code",
          "Coding prompt systems"
        ],
        "correct": 0,
        "explanation": "This involves designing prompts that effectively generate functional, well-structured code.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'prompt engineering for summarization'?",
        "options": [
          "Designing prompts to create effective summaries",
          "Summarizing prompts",
          "Creating prompts from summaries",
          "Engineering summary systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that generate concise, accurate summaries of longer texts.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'prompt engineering for analysis'?",
        "options": [
          "Designing prompts for data and text analysis",
          "Analyzing prompts",
          "Creating analytical prompts",
          "Engineering analysis systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help models perform effective analysis of data or text.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'prompt engineering for reasoning'?",
        "options": [
          "Designing prompts that encourage logical reasoning",
          "Reasoning about prompts",
          "Creating reasoning prompts",
          "Engineering reasoning systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help models think through problems step-by-step.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'prompt engineering for safety'?",
        "options": [
          "Designing prompts that prevent harmful outputs",
          "Making prompts safe",
          "Creating safety prompts",
          "Engineering safety systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help ensure model outputs are safe and appropriate.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'prompt engineering for consistency'?",
        "options": [
          "Designing prompts that produce consistent outputs",
          "Making prompts consistent",
          "Creating consistent prompts",
          "Engineering consistency systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help models produce reliable, consistent results across different inputs.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'prompt engineering for efficiency'?",
        "options": [
          "Designing prompts that minimize token usage",
          "Making prompts efficient",
          "Creating efficient prompts",
          "Engineering efficiency systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that achieve desired results while minimizing computational costs.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'prompt engineering for personalization'?",
        "options": [
          "Designing prompts that adapt to user preferences",
          "Personalizing prompts",
          "Creating personal prompts",
          "Engineering personalization systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help models provide personalized responses based on user context.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'prompt engineering for multi-modal tasks'?",
        "options": [
          "Designing prompts for tasks involving multiple data types",
          "Creating multi-modal prompts",
          "Engineering multi-modal systems",
          "Combining different prompt types"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help models work with text, images, audio, and other data types.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'prompt engineering for domain expertise'?",
        "options": [
          "Designing prompts for specialized knowledge areas",
          "Creating expert prompts",
          "Engineering expert systems",
          "Developing domain knowledge"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help models demonstrate expertise in specific fields or domains.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'prompt engineering for evaluation'?",
        "options": [
          "Designing prompts to assess model performance",
          "Evaluating prompts",
          "Creating evaluation prompts",
          "Engineering evaluation systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help assess how well models perform on specific tasks.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'prompt engineering for debugging'?",
        "options": [
          "Designing prompts to identify and fix model issues",
          "Debugging prompts",
          "Creating debug prompts",
          "Engineering debugging systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help identify and resolve problems with model outputs.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'prompt engineering for iteration'?",
        "options": [
          "Systematically improving prompts through testing",
          "Iterating on prompts",
          "Creating iterative prompts",
          "Engineering iteration systems"
        ],
        "correct": 0,
        "explanation": "This involves the systematic process of testing and refining prompts to achieve better results.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'prompt engineering for collaboration'?",
        "options": [
          "Designing prompts for multi-agent systems",
          "Collaborating on prompts",
          "Creating collaborative prompts",
          "Engineering collaboration systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help multiple AI agents work together effectively.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'prompt engineering for explainability'?",
        "options": [
          "Designing prompts that make model reasoning transparent",
          "Explaining prompts",
          "Creating explanatory prompts",
          "Engineering explanation systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help models provide clear explanations for their outputs.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'prompt engineering for robustness'?",
        "options": [
          "Designing prompts that work reliably across different inputs",
          "Making prompts robust",
          "Creating robust prompts",
          "Engineering robustness systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that produce consistent, reliable results even with varied or noisy inputs.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'prompt engineering for scalability'?",
        "options": [
          "Designing prompts that work across different model sizes",
          "Scaling prompts",
          "Creating scalable prompts",
          "Engineering scaling systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that work effectively across different model architectures and sizes.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'prompt engineering for accessibility'?",
        "options": [
          "Designing prompts that make AI accessible to diverse users",
          "Making prompts accessible",
          "Creating accessible prompts",
          "Engineering accessibility systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help make AI systems usable by people with different abilities and backgrounds.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'prompt engineering for ethics'?",
        "options": [
          "Designing prompts that promote ethical AI behavior",
          "Making prompts ethical",
          "Creating ethical prompts",
          "Engineering ethical systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help ensure AI systems behave in ethically appropriate ways.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'prompt engineering for innovation'?",
        "options": [
          "Designing prompts that encourage creative problem-solving",
          "Innovating with prompts",
          "Creating innovative prompts",
          "Engineering innovation systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help models generate novel, innovative solutions to problems.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'prompt engineering for education'?",
        "options": [
          "Designing prompts for educational applications",
          "Educating about prompts",
          "Creating educational prompts",
          "Engineering education systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help create effective educational experiences and learning tools.",
        "mnemonic": "CLEAR - Context, Language, Examples, Accuracy, Refinement"
      },
      {
        "question": "What is 'prompt engineering for research'?",
        "options": [
          "Designing prompts for research and discovery",
          "Researching prompts",
          "Creating research prompts",
          "Engineering research systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help models assist with research tasks and scientific discovery.",
        "mnemonic": "SMART - Specific, Measurable, Achievable, Relevant, Time-bound"
      },
      {
        "question": "What is 'prompt engineering for business'?",
        "options": [
          "Designing prompts for business applications",
          "Business prompt creation",
          "Creating business prompts",
          "Engineering business systems"
        ],
        "correct": 0,
        "explanation": "This involves crafting prompts that help create value in business contexts and applications.",
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
      },
      {
        "question": "What is underfitting?",
        "options": [
          "When a model is too complex",
          "When a model is too simple and fails to capture patterns",
          "When a model has too many parameters",
          "When a model trains too quickly"
        ],
        "correct": 1,
        "explanation": "Underfitting occurs when a model is too simple and fails to capture the underlying patterns in the data.",
        "mnemonic": "MODEL - Machine, Output, Data, Evaluation, Learning"
      },
      {
        "question": "What is the difference between supervised and unsupervised learning?",
        "options": [
          "Supervised uses labeled data, unsupervised uses unlabeled data",
          "Supervised is faster than unsupervised",
          "Unsupervised is more accurate than supervised",
          "They are the same type of learning"
        ],
        "correct": 0,
        "explanation": "Supervised learning uses labeled training data, while unsupervised learning finds patterns in unlabeled data.",
        "mnemonic": "TRAIN - Test, Run, Analyze, Iterate, Normalize"
      },
      {
        "question": "What is a feature in machine learning?",
        "options": [
          "A characteristic or attribute of the data",
          "A model parameter",
          "A training algorithm",
          "A performance metric"
        ],
        "correct": 0,
        "explanation": "A feature is a characteristic or attribute of the data that the model uses to make predictions.",
        "mnemonic": "MODEL - Machine, Output, Data, Evaluation, Learning"
      },
      {
        "question": "What is feature engineering?",
        "options": [
          "Creating new features from existing data",
          "Training machine learning models",
          "Evaluating model performance",
          "Deploying models to production"
        ],
        "correct": 0,
        "explanation": "Feature engineering involves creating new features or transforming existing ones to improve model performance.",
        "mnemonic": "TRAIN - Test, Run, Analyze, Iterate, Normalize"
      },
      {
        "question": "What is a training set?",
        "options": [
          "Data used to train the model",
          "Data used to test the model",
          "Data used to validate the model",
          "Data used to deploy the model"
        ],
        "correct": 0,
        "explanation": "The training set is the data used to train the model and learn the patterns in the data.",
        "mnemonic": "MODEL - Machine, Output, Data, Evaluation, Learning"
      },
      {
        "question": "What is a test set?",
        "options": [
          "Data used to train the model",
          "Data used to evaluate final model performance",
          "Data used to validate during training",
          "Data used to deploy the model"
        ],
        "correct": 1,
        "explanation": "The test set is used to evaluate the final performance of the model on unseen data.",
        "mnemonic": "TRAIN - Test, Run, Analyze, Iterate, Normalize"
      },
      {
        "question": "What is a validation set?",
        "options": [
          "Data used to train the model",
          "Data used to test the model",
          "Data used to tune hyperparameters during training",
          "Data used to deploy the model"
        ],
        "correct": 2,
        "explanation": "The validation set is used during training to tune hyperparameters and prevent overfitting.",
        "mnemonic": "MODEL - Machine, Output, Data, Evaluation, Learning"
      },
      {
        "question": "What is a hyperparameter?",
        "options": [
          "A parameter learned during training",
          "A parameter set before training begins",
          "A feature of the data",
          "A performance metric"
        ],
        "correct": 1,
        "explanation": "Hyperparameters are parameters that are set before training begins and control the learning process.",
        "mnemonic": "TRAIN - Test, Run, Analyze, Iterate, Normalize"
      },
      {
        "question": "What is gradient descent?",
        "options": [
          "An optimization algorithm for finding minimum of a function",
          "A type of neural network",
          "A feature selection method",
          "A model evaluation technique"
        ],
        "correct": 0,
        "explanation": "Gradient descent is an optimization algorithm that iteratively moves toward the minimum of a function.",
        "mnemonic": "MODEL - Machine, Output, Data, Evaluation, Learning"
      },
      {
        "question": "What is a loss function?",
        "options": [
          "A function that measures how well the model performs",
          "A function that measures data quality",
          "A function that measures training time",
          "A function that measures model size"
        ],
        "correct": 0,
        "explanation": "A loss function measures how well the model's predictions match the actual values.",
        "mnemonic": "TRAIN - Test, Run, Analyze, Iterate, Normalize"
      },
      {
        "question": "What is accuracy in classification?",
        "options": [
          "The proportion of correct predictions",
          "The proportion of incorrect predictions",
          "The speed of predictions",
          "The complexity of the model"
        ],
        "correct": 0,
        "explanation": "Accuracy is the proportion of correct predictions out of all predictions made.",
        "mnemonic": "MODEL - Machine, Output, Data, Evaluation, Learning"
      },
      {
        "question": "What is precision in classification?",
        "options": [
          "The proportion of true positives among all positive predictions",
          "The proportion of true positives among all actual positives",
          "The proportion of correct predictions",
          "The proportion of incorrect predictions"
        ],
        "correct": 0,
        "explanation": "Precision measures the proportion of true positives among all positive predictions.",
        "mnemonic": "TRAIN - Test, Run, Analyze, Iterate, Normalize"
      },
      {
        "question": "What is recall in classification?",
        "options": [
          "The proportion of true positives among all positive predictions",
          "The proportion of true positives among all actual positives",
          "The proportion of correct predictions",
          "The proportion of incorrect predictions"
        ],
        "correct": 1,
        "explanation": "Recall measures the proportion of true positives among all actual positive cases.",
        "mnemonic": "MODEL - Machine, Output, Data, Evaluation, Learning"
      },
      {
        "question": "What is the F1 score?",
        "options": [
          "The harmonic mean of precision and recall",
          "The arithmetic mean of precision and recall",
          "The geometric mean of precision and recall",
          "The maximum of precision and recall"
        ],
        "correct": 0,
        "explanation": "The F1 score is the harmonic mean of precision and recall, providing a balanced measure.",
        "mnemonic": "TRAIN - Test, Run, Analyze, Iterate, Normalize"
      },
      {
        "question": "What is mean squared error (MSE)?",
        "options": [
          "The average of squared differences between predictions and actual values",
          "The average of absolute differences between predictions and actual values",
          "The maximum difference between predictions and actual values",
          "The minimum difference between predictions and actual values"
        ],
        "correct": 0,
        "explanation": "MSE is the average of squared differences between predicted and actual values.",
        "mnemonic": "MODEL - Machine, Output, Data, Evaluation, Learning"
      },
      {
        "question": "What is mean absolute error (MAE)?",
        "options": [
          "The average of squared differences between predictions and actual values",
          "The average of absolute differences between predictions and actual values",
          "The maximum difference between predictions and actual values",
          "The minimum difference between predictions and actual values"
        ],
        "correct": 1,
        "explanation": "MAE is the average of absolute differences between predicted and actual values.",
        "mnemonic": "TRAIN - Test, Run, Analyze, Iterate, Normalize"
      },
      {
        "question": "What is R-squared (R²)?",
        "options": [
          "A measure of how well the model explains the variance in the data",
          "A measure of model complexity",
          "A measure of training time",
          "A measure of data size"
        ],
        "correct": 0,
        "explanation": "R-squared measures the proportion of variance in the dependent variable explained by the model.",
        "mnemonic": "MODEL - Machine, Output, Data, Evaluation, Learning"
      },
      {
        "question": "What is a confusion matrix?",
        "options": [
          "A table showing the performance of a classification model",
          "A matrix of model parameters",
          "A matrix of feature correlations",
          "A matrix of training data"
        ],
        "correct": 0,
        "explanation": "A confusion matrix shows the performance of a classification model by comparing predicted vs actual classes.",
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
      },
      {
        "question": "What is Euclidean distance?",
        "options": [
          "The straight-line distance between two points",
          "The angle between two vectors",
          "The dot product of two vectors",
          "The magnitude of a vector"
        ],
        "correct": 0,
        "explanation": "Euclidean distance is the straight-line distance between two points in space, calculated using the Pythagorean theorem.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is Manhattan distance?",
        "options": [
          "The sum of absolute differences between coordinates",
          "The straight-line distance between points",
          "The angle between vectors",
          "The dot product of vectors"
        ],
        "correct": 0,
        "explanation": "Manhattan distance is the sum of absolute differences between coordinates, like walking along city blocks.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is PCA (Principal Component Analysis)?",
        "options": [
          "A technique for dimensionality reduction",
          "A clustering algorithm",
          "A classification algorithm",
          "A regression algorithm"
        ],
        "correct": 0,
        "explanation": "PCA is a technique that transforms data into a new coordinate system to reduce dimensionality.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a word embedding?",
        "options": [
          "A vector representation of words in a continuous space",
          "A type of neural network",
          "A text preprocessing technique",
          "A language model"
        ],
        "correct": 0,
        "explanation": "Word embeddings represent words as vectors in a continuous space where similar words are close together.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a vector?",
        "options": [
          "An ordered list of numbers representing a point in space",
          "A single number",
          "A matrix of numbers",
          "A string of text"
        ],
        "correct": 0,
        "explanation": "A vector is an ordered list of numbers that represents a point in a multi-dimensional space.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is vectorization?",
        "options": [
          "Converting data into vector format",
          "Creating vectors from scratch",
          "Deleting vectors",
          "Sorting vectors"
        ],
        "correct": 0,
        "explanation": "Vectorization is the process of converting data (like text or images) into vector format for machine learning.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a feature vector?",
        "options": [
          "A vector containing all features for a data point",
          "A vector of model parameters",
          "A vector of predictions",
          "A vector of errors"
        ],
        "correct": 0,
        "explanation": "A feature vector contains all the features (attributes) for a single data point.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is clustering?",
        "options": [
          "Grouping similar data points together",
          "Classifying data into predefined categories",
          "Predicting continuous values",
          "Reducing data dimensionality"
        ],
        "correct": 0,
        "explanation": "Clustering groups similar data points together based on their features or characteristics.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is K-means clustering?",
        "options": [
          "A clustering algorithm that groups data into K clusters",
          "A classification algorithm",
          "A regression algorithm",
          "A dimensionality reduction technique"
        ],
        "correct": 0,
        "explanation": "K-means is a clustering algorithm that partitions data into K clusters based on similarity.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a dot product?",
        "options": [
          "The sum of element-wise products of two vectors",
          "The angle between two vectors",
          "The magnitude of a vector",
          "The distance between two points"
        ],
        "correct": 0,
        "explanation": "The dot product is the sum of element-wise products of two vectors, used in similarity calculations.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is vector normalization?",
        "options": [
          "Scaling a vector to unit length",
          "Changing vector direction",
          "Adding vectors together",
          "Multiplying vectors"
        ],
        "correct": 0,
        "explanation": "Vector normalization scales a vector to unit length (magnitude of 1) while preserving direction.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a high-dimensional space?",
        "options": [
          "A space with many dimensions or features",
          "A space with large vectors",
          "A space with high accuracy",
          "A space with fast computation"
        ],
        "correct": 0,
        "explanation": "A high-dimensional space has many dimensions or features, which can lead to the curse of dimensionality.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is the curse of dimensionality?",
        "options": [
          "Problems that arise in high-dimensional spaces",
          "The difficulty of visualizing high-dimensional data",
          "The computational cost of high-dimensional operations",
          "All of the above"
        ],
        "correct": 3,
        "explanation": "The curse of dimensionality refers to various problems that arise when working with high-dimensional data.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a similarity matrix?",
        "options": [
          "A matrix showing similarities between all pairs of data points",
          "A matrix of model parameters",
          "A matrix of features",
          "A matrix of predictions"
        ],
        "correct": 0,
        "explanation": "A similarity matrix shows the similarity scores between all pairs of data points in a dataset.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is t-SNE?",
        "options": [
          "A technique for visualizing high-dimensional data",
          "A clustering algorithm",
          "A classification algorithm",
          "A regression algorithm"
        ],
        "correct": 0,
        "explanation": "t-SNE (t-Distributed Stochastic Neighbor Embedding) is used to visualize high-dimensional data in 2D or 3D.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is UMAP?",
        "options": [
          "A dimensionality reduction and visualization technique",
          "A clustering algorithm",
          "A classification algorithm",
          "A regression algorithm"
        ],
        "correct": 0,
        "explanation": "UMAP (Uniform Manifold Approximation and Projection) is used for dimensionality reduction and visualization.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a manifold?",
        "options": [
          "A geometric structure that locally resembles Euclidean space",
          "A type of vector",
          "A clustering algorithm",
          "A similarity measure"
        ],
        "correct": 0,
        "explanation": "A manifold is a geometric structure that locally resembles Euclidean space but may be curved globally.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a kernel function?",
        "options": [
          "A function that computes similarity in high-dimensional space",
          "A function that normalizes vectors",
          "A function that clusters data",
          "A function that reduces dimensions"
        ],
        "correct": 0,
        "explanation": "A kernel function computes the similarity between data points in a high-dimensional space without explicitly mapping them.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a support vector machine (SVM)?",
        "options": [
          "A classification algorithm that finds optimal hyperplanes",
          "A clustering algorithm",
          "A regression algorithm",
          "A dimensionality reduction technique"
        ],
        "correct": 0,
        "explanation": "SVM is a classification algorithm that finds optimal hyperplanes to separate different classes of data.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a hyperplane?",
        "options": [
          "A flat subspace of dimension n-1 in n-dimensional space",
          "A curved surface",
          "A point in space",
          "A line in 2D space"
        ],
        "correct": 0,
        "explanation": "A hyperplane is a flat subspace of dimension n-1 in n-dimensional space, used for classification boundaries.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a decision boundary?",
        "options": [
          "A surface that separates different classes in classification",
          "A boundary between training and test data",
          "A boundary between features",
          "A boundary between dimensions"
        ],
        "correct": 0,
        "explanation": "A decision boundary is a surface that separates different classes in classification problems.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a feature space?",
        "options": [
          "A space where each dimension represents a feature",
          "A space for storing features",
          "A space for visualizing data",
          "A space for clustering"
        ],
        "correct": 0,
        "explanation": "A feature space is a mathematical space where each dimension represents a feature of the data.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a latent space?",
        "options": [
          "A compressed representation of data",
          "A space for storing data",
          "A space for visualizing data",
          "A space for clustering"
        ],
        "correct": 0,
        "explanation": "A latent space is a compressed representation of data that captures the most important patterns and relationships.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a semantic space?",
        "options": [
          "A space where similar meanings are close together",
          "A space for storing text",
          "A space for visualizing words",
          "A space for clustering text"
        ],
        "correct": 0,
        "explanation": "A semantic space is a vector space where words or concepts with similar meanings are positioned close together.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a metric space?",
        "options": [
          "A space with a distance function",
          "A space for storing metrics",
          "A space for measuring performance",
          "A space for clustering"
        ],
        "correct": 0,
        "explanation": "A metric space is a set equipped with a distance function that satisfies certain mathematical properties.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a norm?",
        "options": [
          "A function that assigns a length to vectors",
          "A function that measures distance",
          "A function that normalizes data",
          "A function that clusters data"
        ],
        "correct": 0,
        "explanation": "A norm is a function that assigns a length or magnitude to vectors in a vector space.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is L1 norm (Manhattan norm)?",
        "options": [
          "The sum of absolute values of vector elements",
          "The square root of sum of squares",
          "The maximum absolute value",
          "The minimum absolute value"
        ],
        "correct": 0,
        "explanation": "L1 norm is the sum of absolute values of vector elements, also called Manhattan norm.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is L2 norm (Euclidean norm)?",
        "options": [
          "The square root of sum of squares of vector elements",
          "The sum of absolute values",
          "The maximum absolute value",
          "The minimum absolute value"
        ],
        "correct": 0,
        "explanation": "L2 norm is the square root of sum of squares of vector elements, also called Euclidean norm.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is L∞ norm (Chebyshev norm)?",
        "options": [
          "The maximum absolute value of vector elements",
          "The sum of absolute values",
          "The square root of sum of squares",
          "The minimum absolute value"
        ],
        "correct": 0,
        "explanation": "L∞ norm is the maximum absolute value of vector elements, also called Chebyshev norm.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a unit vector?",
        "options": [
          "A vector with magnitude 1",
          "A vector with magnitude 0",
          "A vector with maximum magnitude",
          "A vector with minimum magnitude"
        ],
        "correct": 0,
        "explanation": "A unit vector is a vector with magnitude (length) of 1, often used to represent direction.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a basis vector?",
        "options": [
          "A vector that is part of a basis for a vector space",
          "A vector with magnitude 1",
          "A vector with magnitude 0",
          "A vector with maximum magnitude"
        ],
        "correct": 0,
        "explanation": "A basis vector is a vector that is part of a basis, a set of linearly independent vectors that span the space.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is linear independence?",
        "options": [
          "When no vector can be written as a linear combination of others",
          "When vectors are perpendicular",
          "When vectors have the same magnitude",
          "When vectors point in the same direction"
        ],
        "correct": 0,
        "explanation": "Vectors are linearly independent when no vector can be written as a linear combination of the others.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a span?",
        "options": [
          "The set of all linear combinations of vectors",
          "The distance between vectors",
          "The angle between vectors",
          "The magnitude of vectors"
        ],
        "correct": 0,
        "explanation": "The span of a set of vectors is the set of all possible linear combinations of those vectors.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a projection?",
        "options": [
          "The component of one vector in the direction of another",
          "The distance between vectors",
          "The angle between vectors",
          "The magnitude of vectors"
        ],
        "correct": 0,
        "explanation": "A projection is the component of one vector in the direction of another vector.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is orthogonality?",
        "options": [
          "When vectors are perpendicular (dot product is zero)",
          "When vectors are parallel",
          "When vectors have the same magnitude",
          "When vectors point in the same direction"
        ],
        "correct": 0,
        "explanation": "Vectors are orthogonal when they are perpendicular, meaning their dot product is zero.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a Gram matrix?",
        "options": [
          "A matrix of inner products between vectors",
          "A matrix of distances between vectors",
          "A matrix of angles between vectors",
          "A matrix of magnitudes of vectors"
        ],
        "correct": 0,
        "explanation": "A Gram matrix is a matrix of inner products (dot products) between pairs of vectors.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a kernel matrix?",
        "options": [
          "A matrix of kernel function values between data points",
          "A matrix of distances between data points",
          "A matrix of similarities between data points",
          "A matrix of features"
        ],
        "correct": 0,
        "explanation": "A kernel matrix contains kernel function values between all pairs of data points.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a distance matrix?",
        "options": [
          "A matrix of distances between all pairs of data points",
          "A matrix of similarities between data points",
          "A matrix of features",
          "A matrix of predictions"
        ],
        "correct": 0,
        "explanation": "A distance matrix contains distances between all pairs of data points in a dataset.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a similarity graph?",
        "options": [
          "A graph where nodes represent data points and edges represent similarities",
          "A graph of model performance",
          "A graph of feature correlations",
          "A graph of training progress"
        ],
        "correct": 0,
        "explanation": "A similarity graph represents data points as nodes and similarities between them as edges.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is spectral clustering?",
        "options": [
          "A clustering method that uses eigenvalues of similarity matrix",
          "A clustering method that uses distances",
          "A clustering method that uses features",
          "A clustering method that uses predictions"
        ],
        "correct": 0,
        "explanation": "Spectral clustering uses eigenvalues and eigenvectors of a similarity matrix to perform clustering.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a Laplacian matrix?",
        "options": [
          "A matrix used in spectral clustering and graph analysis",
          "A matrix of distances",
          "A matrix of similarities",
          "A matrix of features"
        ],
        "correct": 0,
        "explanation": "A Laplacian matrix is used in spectral clustering and graph analysis to capture the structure of the data.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a graph embedding?",
        "options": [
          "A vector representation of nodes in a graph",
          "A graph of embeddings",
          "A graph of similarities",
          "A graph of distances"
        ],
        "correct": 0,
        "explanation": "A graph embedding represents nodes in a graph as vectors while preserving the graph structure.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a manifold learning?",
        "options": [
          "Learning the structure of data that lies on a manifold",
          "Learning to create manifolds",
          "Learning to visualize data",
          "Learning to cluster data"
        ],
        "correct": 0,
        "explanation": "Manifold learning discovers the underlying structure of data that lies on a low-dimensional manifold.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is isomap?",
        "options": [
          "A manifold learning technique that preserves geodesic distances",
          "A clustering algorithm",
          "A classification algorithm",
          "A regression algorithm"
        ],
        "correct": 0,
        "explanation": "Isomap is a manifold learning technique that preserves geodesic distances between data points.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is locally linear embedding (LLE)?",
        "options": [
          "A manifold learning technique that preserves local linear relationships",
          "A clustering algorithm",
          "A classification algorithm",
          "A regression algorithm"
        ],
        "correct": 0,
        "explanation": "LLE preserves local linear relationships between data points during dimensionality reduction.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a geodesic distance?",
        "options": [
          "The shortest path between two points on a manifold",
          "The straight-line distance between points",
          "The Euclidean distance between points",
          "The Manhattan distance between points"
        ],
        "correct": 0,
        "explanation": "A geodesic distance is the shortest path between two points along the surface of a manifold.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a tangent space?",
        "options": [
          "A linear approximation of a manifold at a point",
          "A space for storing tangents",
          "A space for visualizing data",
          "A space for clustering"
        ],
        "correct": 0,
        "explanation": "A tangent space is a linear approximation of a manifold at a specific point.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a coordinate system?",
        "options": [
          "A system for specifying positions in space",
          "A system for storing data",
          "A system for visualizing data",
          "A system for clustering"
        ],
        "correct": 0,
        "explanation": "A coordinate system is a system for specifying positions in space using coordinates.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a transformation?",
        "options": [
          "A function that maps points from one space to another",
          "A function that changes data",
          "A function that normalizes data",
          "A function that clusters data"
        ],
        "correct": 0,
        "explanation": "A transformation is a function that maps points from one space to another while preserving certain properties.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is an isometry?",
        "options": [
          "A transformation that preserves distances",
          "A transformation that preserves angles",
          "A transformation that preserves areas",
          "A transformation that preserves volumes"
        ],
        "correct": 0,
        "explanation": "An isometry is a transformation that preserves distances between points.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a homeomorphism?",
        "options": [
          "A continuous transformation with a continuous inverse",
          "A linear transformation",
          "A distance-preserving transformation",
          "A angle-preserving transformation"
        ],
        "correct": 0,
        "explanation": "A homeomorphism is a continuous transformation with a continuous inverse that preserves topological properties.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a diffeomorphism?",
        "options": [
          "A smooth transformation with a smooth inverse",
          "A linear transformation",
          "A distance-preserving transformation",
          "A angle-preserving transformation"
        ],
        "correct": 0,
        "explanation": "A diffeomorphism is a smooth transformation with a smooth inverse that preserves differentiable structure.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a metric?",
        "options": [
          "A function that measures distance between points",
          "A function that measures similarity",
          "A function that measures angle",
          "A function that measures area"
        ],
        "correct": 0,
        "explanation": "A metric is a function that measures the distance between points in a space.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a pseudometric?",
        "options": [
          "A function that satisfies metric properties except for the identity of indiscernibles",
          "A function that measures similarity",
          "A function that measures angle",
          "A function that measures area"
        ],
        "correct": 0,
        "explanation": "A pseudometric satisfies metric properties except that different points can have zero distance.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a semimetric?",
        "options": [
          "A function that satisfies metric properties except for the triangle inequality",
          "A function that measures similarity",
          "A function that measures angle",
          "A function that measures area"
        ],
        "correct": 0,
        "explanation": "A semimetric satisfies metric properties except for the triangle inequality.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a quasimetric?",
        "options": [
          "A function that satisfies metric properties except for symmetry",
          "A function that measures similarity",
          "A function that measures angle",
          "A function that measures area"
        ],
        "correct": 0,
        "explanation": "A quasimetric satisfies metric properties except for symmetry (d(x,y) ≠ d(y,x) in general).",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a ultrametric?",
        "options": [
          "A metric that satisfies the strong triangle inequality",
          "A metric that measures similarity",
          "A metric that measures angle",
          "A metric that measures area"
        ],
        "correct": 0,
        "explanation": "An ultrametric satisfies the strong triangle inequality: d(x,z) ≤ max(d(x,y), d(y,z)).",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a distance function?",
        "options": [
          "A function that measures distance between objects",
          "A function that measures similarity",
          "A function that measures angle",
          "A function that measures area"
        ],
        "correct": 0,
        "explanation": "A distance function measures the distance between objects in a space.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a similarity function?",
        "options": [
          "A function that measures similarity between objects",
          "A function that measures distance",
          "A function that measures angle",
          "A function that measures area"
        ],
        "correct": 0,
        "explanation": "A similarity function measures how similar objects are to each other.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a dissimilarity function?",
        "options": [
          "A function that measures dissimilarity between objects",
          "A function that measures similarity",
          "A function that measures distance",
          "A function that measures angle"
        ],
        "correct": 0,
        "explanation": "A dissimilarity function measures how different objects are from each other.",
        "mnemonic": "SPACE - Spatial, Position, Analysis, Coordinates, Embeddings"
      },
      {
        "question": "What is a proximity function?",
        "options": [
          "A general function that measures proximity (similarity or distance)",
          "A function that measures similarity only",
          "A function that measures distance only",
          "A function that measures angle"
        ],
        "correct": 0,
        "explanation": "A proximity function is a general term for functions that measure similarity or distance between objects.",
        "mnemonic": "DISTANCE - Data, Information, Similarity, Transformation, Analysis, Coordinates, Embeddings"
      }
    ]
  }
}; 