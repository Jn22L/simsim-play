function insertList(createdRows) {
  return new Promise(function (resolved, rejected) {
    if (createdRows.length > 10) {
      rejected("에러, 건수가 많아요.");
      return;
    }
    createdRows.forEach(function (row) {
      console.log("forEach", row.LC_TITLE);
      if (row.LC_TITLE === "333") throw new Error("333 에러 발생!");
    });
    resolved("성공입니다.");
  });
}

function promiseTest() {
  const createdRows = [
    { LC_DATE: "2022.07.18", LC_TITLE: "111" },
    { LC_DATE: "2022.07.18", LC_TITLE: "222" },
    { LC_DATE: "2022.07.18", LC_TITLE: "333" },
    { LC_DATE: "2022.07.18", LC_TITLE: "444" },
    { LC_DATE: "2022.07.18", LC_TITLE: "555" },
  ];

  insertList(createdRows)
    .then(function (result) {
      console.log(result);
    })
    .catch(function (error) {
      console.log("여기서 거부된 프로미스(" + error + ")를 처리하세요.");
    });
}

promiseTest();
