Vaultier.VaultRoute = Ember.Route.extend(
    {
        model: function (params, transition) {
            workspace = this.modelFor('Workspace');
            model = this.get('store')
                .find('Vault', params.vault)
                .then(function (model) {
                    if (model.get('workspace') != workspace.get('pk')) {
                        var error = new Error();
                        error.status = 404
                        throw error
                    }
                })
            return model;
        },

        afterModel: function (vault) {
            Service.Environment.current().set('vault', vault);
        },

        serialize: function (model) {
            // primitives
            if (typeof model == 'string' || typeof model == 'number') {
                return model
            }

            return {
                vault: model.get('id')
            }
        }

    });

Vaultier.VaultIndexRoute = Ember.Route.extend({
    beforeModel: function () {
        this.transitionTo('Cards.index')
    }
})
