from django.db import models
from django.db.models.deletion import CASCADE
from django.db.models.manager import Manager
from core.models.acl_fields import AclDirectionField
from core.models.role_fields import RoleLevelField
from core.models.object_reference import ObjectReference, ObjectReferenceTypeField


class AclManager(Manager):
    pass
    #def materialize_user(self, user):
    #    pass
    #
    #def materialize_role(self, role):
    #    pass

    #def has_acl(self, user, level, object):
    #    kwargs = {
    #        'to_workspace': None,
    #        'to_vault': None,
    #        'to_card': None,
    #        'user': user,
    #        'level__gte': level
    #    }
    #
    #    name = type(object).__name__
    #    if name == 'Workspace':
    #        kwargs['to_workspace'] = object
    #    elif name == 'Vault':
    #        kwargs['to_vault'] = object
    #    elif name == 'Card':
    #        kwargs['to_card'] = object
    #    else:
    #        raise RuntimeError('Usupported ACL object: ' + object.__class__.__name__)
    #
    #    return self.filter(**kwargs).count() > 0


class Acl(ObjectReference,models.Model):
    class Meta:
        db_table = u'vaultier_acl'
        app_label = 'core'

    objects = AclManager()

    type = ObjectReferenceTypeField()
    to_workspace = models.ForeignKey('core.Workspace', on_delete=CASCADE, null=True, blank=True)
    to_vault = models.ForeignKey('core.Vault', on_delete=CASCADE, null=True, blank=True)
    to_card = models.ForeignKey('core.Card', on_delete=CASCADE, null=True, blank=True)

    level = RoleLevelField()
    direction = AclDirectionField()
    role = models.ForeignKey('core.Role', on_delete=CASCADE)
    user = models.ForeignKey('core.User', on_delete=CASCADE)

    def __unicode__(self):
        return 'Acl(' + str(self.id) + '): to:' + str(self.type) + ' level:' + str(self.level) + ' user: '+str(self.user)