'use strict';

var projects = [];

function Project (projectObject) {
  this.title = projectObject.title;
  this.projectUrl = projectObject.projectUrl;
  this.projectImage = projectObject.projectImage;
  this.body = projectObject.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');

  $newProject.find('.project-title').text(this.title);
  $newProject.find('.project-title > a').attr('href', this.projectUrl);
  $newProject.find('.image-container').html(this.projectImage);
  $newProject.find('.project-body').text(this.projectBody);

  return $newProject;
}

rawData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
  console.log(projectObject);
})

projects.forEach(function(p) {
  $('#projects').append(p.toHtml());
  console.log(p);
})