define([
  "services/desktop_notifier",
  "services/object_local_storage",
  "services/events_filter",
  "services/badge"
], function(
  DesktopNotifier,
  ObjectLocalStorage,
  EventsFilter,
  Badge
) {
  return function(eventsData, accountID) {
    var filteredItems = EventsFilter(eventsData, accountID);

    Badge.add(filteredItems.length);

    if (ObjectLocalStorage.getItem("miscConfigs", "disable_desktop_notifications")) {
      return;
    }

    filteredItems.forEach(function(eventData) {
      DesktopNotifier.notify(eventData);
    });
  }
});