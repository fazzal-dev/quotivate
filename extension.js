const vscode = require("vscode");
import axios from "axios";

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "extension.showQuotes",
    () => {
      vscode.window.showQuickPick(getCategories()).then((selectedCategory) => {
        if (selectedCategory) {
          fetchQuote(selectedCategory);
        }
      });
    }
  );

  context.subscriptions.push(disposable);
}

function fetchQuote(category) {
  const API_ENDPOINT = "https://api.api-ninjas.com/v1/quotes";

  axios
    .get(`${API_ENDPOINT}?category=${category}`)
    .then((response) => {
      const data = response.data[0];
      const quote = data.quote;
      vscode.window.setStatusBarMessage(quote);
    })
    .catch((error) => {
      vscode.window.setStatusBarMessage("failed to fetch quote.");
    });
}

function getCategories() {
  return [
    "age",
    "alone",
    "amazing",
    "anger",
    "architecture",
    "art",
    "attitude",
    "beauty",
    "best",
    "birthday",
    "business",
    "car",
    "change",
    "communications",
    "computers",
    "cool",
    "courage",
    "dad",
    "dating",
    "death",
    "design",
    "dreams",
    "education",
    "environmental",
    "equality",
    "experience",
    "failure",
    "faith",
    "family",
    "famous",
    "fear",
    "fitness",
    "food",
    "forgiveness",
    "freedom",
    "friendship",
    "funny",
    "future",
    "god",
    "good",
    "government",
    "graduation",
    "great",
    "happiness",
    "health",
    "history",
    "home",
    "hope",
    "humor",
    "imagination",
    "inspirational",
    "intelligence",
    "jealousy",
    "knowledge",
    "leadership",
    "learning",
    "legal",
    "life",
    "love",
    "marriage",
    "medical",
    "men",
    "mom",
    "money",
    "morning",
    "movies",
    "success",
  ];
}

exports.activate = activate;
