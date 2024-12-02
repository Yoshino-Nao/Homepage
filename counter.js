fetch("count.txt")
  .then((response) => response.text())
  .then((data) => {
    console.log("テキストファイルの内容:");
    console.log(data);
  })
  .catch((error) => {
    console.error("エラー:", error);
  });
