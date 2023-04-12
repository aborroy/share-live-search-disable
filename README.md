# Alfresco Share Disable Live Search feature

This is a Share project for Alfresco SDK 4.5 (ACS 7.3)

The [Alfresco Share Toolbar](https://docs.alfresco.com/content-services/latest/using/share/#alfresco-share-toolbar) includes a Search Box in the top right hand corner that provides suggested results after typing 2 or more characters for documents, people and sites. This featured is named **live search**. This project disables this feature, so the user needs to type the full search string and hit the button to get the results.

## Building the project

The project can be built using regular Maven command.

```
$ mvn clean package
```

You'll find `share-live-search-disable-1.0.0.jar` Share addon in `target` folder ready to be deployed to ACS after that. Just copy this JAR file to `tomcat/webapps/share/WEB-INF/lib` folder or apply equivalent operation in your deployment to apply the addon.

## Share extension

[live-search-extension.xml](src/main/resources/alfresco/web-extension/site-data/extensions/live-search-extension.xml) declares a simple extension for [org.alfresco.share-header](https://github.com/Alfresco/alfresco-community-share/tree/release/7.3.1/share/src/main/resources/alfresco/site-webscripts/org/alfresco/share/header) package. This package contains the `share-header.get.js` file that is being extended.

[share-header.get.js](src/main/resources/alfresco/web-extension/site-webscripts/org/alfresco/live/search
/share-header.get.js) contains the configuration to remove people, sites and documents results from *live search* feature.
