// Disable live search for documents, people and sites
var headerSearch = widgetUtils.findObject(model.jsonModel, "id", "HEADER_SEARCH");
if (headerSearch)
{
  headerSearch.config.showDocumentResults = false;
  headerSearch.config.showPeopleResults = false;
  headerSearch.config.showSiteResults = false;
  headerSearch.config.placeholder="Search files";
}