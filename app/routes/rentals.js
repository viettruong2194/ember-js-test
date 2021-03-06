import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('rental');
    },
    actions: {
        createRental(params) {
            return this.store.createRecord('rental', params).save();
        }
    }
});
