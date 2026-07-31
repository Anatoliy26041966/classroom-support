function deployRemainingSchoolCourses() {
  Logger.log("=== 🚀 ЗАПУСК ФІНАЛЬНОЇ СУПЕР-ХВИЛІ ДЛЯ 2-9 КЛАСІВ ===");

  var targetNames = { primary: "rubric_1_4", middle: "rubric_5_9", high: "rubric_10_11" };
  var rubrics = { primary: null, middle: null, high: null };

  // Зчитуємо ID файлів рубрик із Диску
  for (var key in targetNames) {
    var files = DriveApp.getFilesByName(targetNames[key]);
    if (!files.hasNext()) files = DriveApp.getFilesByName(targetNames[key] + ".csv");
    if (files.hasNext()) rubrics[key] = files.next().getId();
  }

  var optionalArgs = { courseStates: "ACTIVE", pageSize: 100 };
  var pageToken = null;
  var counts = { primary: 0, middle: 0, skippedHigh: 0, skippedOther: 0 };
  var totalProcessed = 0;

  do {
    if (pageToken) optionalArgs.pageToken = pageToken;
    var response = Classroom.Courses.list(optionalArgs);
    var courses = response.courses;
    
    if (courses && courses.length > 0) {
      for (var i = 0; i < courses.length; i++) {
        totalProcessed++;
        var course = courses[i];
        var courseName = course.name;
        var courseId = course.id;

        // 🔥 КРИТИЧНИЙ ЗАХИСТ: Пропускаємо 10 та 11 класи, які ми вже зробили в Хвилі 1
        if (courseName.includes("10-") || courseName.includes("11-") || /^(10|11)\b/.test(courseName)) {
          counts.skippedHigh++;
          continue; 
        }

        var targetFileId = null;
        var targetGroup = "";
        var assignmentTitle = "";

        // Сегментація середньої школи (5-9 класи)
        if (
          courseName.includes("5-") || courseName.includes("6-") || courseName.includes("7-") || courseName.includes("8-") || courseName.includes("9-") ||
          courseName.includes("5 клас") || courseName.includes("6 клас") || courseName.includes("7 клас") || courseName.includes("8 клас") || courseName.includes("9 клас")
        ) {
          targetFileId = rubrics.middle;
          targetGroup = "middle";
          assignmentTitle = "Моніторинг якості знань: Діагностична робота (Середня школа)";
        } 
        // Сегментація початкової школи (1-4 класи)
        else if (
          courseName.includes("1-") || courseName.includes("2-") || courseName.includes("3-") || courseName.includes("4-") ||
          courseName.includes("1 клас") || courseName.includes("2 клас") || courseName.includes("3 клас") || courseName.includes("4 клас") ||
          /^0[1-4]\b/.test(courseName)
        ) {
          targetFileId = rubrics.primary;
          targetGroup = "primary";
          assignmentTitle = "Моніторинг НУШ: Діагностична робота (Початкова школа)";
        }

        if (targetFileId) {
          var coursework = {
            title: assignmentTitle,
            state: "DRAFT",
            workType: "ASSIGNMENT",
            materials: [{ driveFile: { driveFile: { id: targetFileId }, shareMode: "VIEW" } }]
          };
          
          try {
            Classroom.Courses.CourseWork.create(coursework, courseId);
            Logger.log("🎯 Чернетку створено для: " + courseName);
            counts[targetGroup]++;
            Utilities.sleep(350); // Оптимальна пауза, щоб не ловити ліміти
          } catch (e) {
            Logger.log("❌ Помилка створення в " + courseName + ": " + e.message);
          }
        } else {
          counts.skippedOther++;
        }
      }
    }
    pageToken = response.nextPageToken;
    Logger.log("🔄 Переходимо на наступну сторінку курсів... (Опрацьовано всього в базі: " + totalProcessed + ")");
  } while (pageToken);

  Logger.log("=======================================================");
  Logger.log("🏁 ФІНАЛЬНИЙ ЗВІТ АВТОМАТИЗАЦІЇ ШКОЛИ:");
  Logger.log("📊 Додано нових чернеток у Початкову школу (1-4): " + counts.primary);
  Logger.log("📊 Додано нових чернеток у Середню школу (5-9): " + counts.middle);
  Logger.log("💤 Безпечно пропущено (вже готові 10-11 класи): " + counts.skippedHigh);
  Logger.log("🤷‍♂️ Пропущено курсів без розпізнаних маркерів класів: " + counts.skippedOther);
  Logger.log("=======================================================");
}