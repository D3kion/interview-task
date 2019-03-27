const { View, CollectionView } = Marionette;

const onItemClick = function(marker) {
    map.flyTo(marker.getLatLng(), 18);
    marker.openPopup();
}

const collection = new Backbone.Collection([
	{title: 'Парк', onClick() { onItemClick(park); }},
	{title: 'Общежитие', onClick() { onItemClick(dorm); }},
    {title: 'Остановка', onClick() { onItemClick(bus1); }},
	{title: 'Остановка', onClick() { onItemClick(bus2); }},
	{title: 'Туалет', onClick() { onItemClick(toilet); }},
	{title: 'Храм', onClick() { onItemClick(church); }},
	{title: 'Памятник', onClick() { onItemClick(monument); }},
]);

const Item = View.extend({
    template: _.template('<%= title %>'),
    tagName: 'button',
    className : 'list-group-item list-group-item-action',
    triggers: {
        click: 'click:child'
    }
});

const SideBarView = CollectionView.extend({
    el: '#sidebar',
    childView: Item,
    collection: collection,
    childViewEventPrefix: 'childview',
    onChildviewClickChild(childView) {
        childView.model.attributes.onClick();
    }
});

const sideBarView = new SideBarView();
sideBarView.render();
