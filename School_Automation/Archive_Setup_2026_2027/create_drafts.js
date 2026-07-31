function deployPrimarySchoolWithAutoRubric() {
  var fileName = "rubric_1_4.csv";
  var files = DriveApp.getFilesByName(fileName);
  
  if (!files.hasNext()) {
    files = DriveApp.getFilesByName("rubric_1_4");
  }
  
  if (!files.hasNext()) {
    Logger.log("❌ ПОМИЛКА: Файл не знайдено!");
    return;
  }
  
  var finalFile = files.next();
  var finalFileId = finalFile.getId();
  
  Logger.log("🔍 АВТОПОШУК СУПЕР-УСПІШНИЙ! ID: " + finalFileId);

  try {
    finalFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  } catch(e) {
    Logger.log("❌ Помилка доступу: " + e.message);
    return;
  }

  var optionalArgs = { courseStates: "ACTIVE", pageSize: 100 };
  var pageToken = null;
  var processedCount = 0;

  do {
    if (pageToken) optionalArgs.pageToken = pageToken;
    var response = Classroom.Courses.list(optionalArgs);
    var courses = response.courses;
    
    if (courses && courses.length > 0) {
      for (var i = 0; i < courses.length; i++) {
        var course = courses[i];
        var courseName = course.name;
        var isPrimarySchool = false;
        
        // Захист від потрапляння 10 та 11 класів
        if (!courseName.includes("10 клас") && !courseName.includes("11 class") && !courseName.includes("11 клас")) {
          if (/^[1-4]\b/.test(courseName) || 
              courseName.toLowerCase().includes("1 клас") || 
              courseName.toLowerCase().includes("2 клас") || 
              courseName.toLowerCase().includes("3 клас") || 
              courseName.toLowerCase().includes("4 клас")) {
            isPrimarySchool = true;
          }
        }
        
        if (isPrimarySchool) {
          var courseId = course.id;
          var coursework = {
            title: "Моніторинг НУШ: Діагностична робота (Тест)",
            state: "DRAFT",
            workType: "ASSIGNMENT",
            materials: [{ driveFile: { driveFile: { id: finalFileId }, shareMode: "VIEW" } }]
          };
          
          try {
            Classroom.Courses.CourseWork.create(coursework, courseId);
            Logger.log("✅ Чернетку створено для: " + courseName);
            processedCount++;
            Utilities.sleep(1000); 
          } catch (e) {
            Logger.log("❌ Помилка в курсі " + courseName + ": " + e.message);
          }
        }
      }
    }
    pageToken = response.nextPageToken;
  } while (pageToken);

  Logger.log("🚀 ФІНІШ! Розгорнуто чернеток початкової школи: " + processedCount);
}