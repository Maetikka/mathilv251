ce plug comprends 2 parties

1)
reception de SMS avec code de sécurité sur votre systeme
Permet de controler Mathilde d'ou que vous soyez avec juste un téléphone

2)
permet de vocaliser toute les notifications (ou au choix) se trouvant sur votre smartphone (sms/google+/Hangoots/.....+de 30)
les noms des applis apparaisent dans la console pour pouvoir les activer/déactiver.
par défault celle du .prop

////////////////

prérequis : pushbullet instalé sur votre téléphone

.prop : 
collez votre apikey pushbulett dans le .prop
idem pour le nom des applis à surveiller
idem pour le code de protection par default 0123456789

xml :
phrase magique dans le xml

dans le js
rien à faire

/////////////////////////////////////
!!!! forme sms actions !!!!!
/////////////////////////////////////

le sms commence toujours par Mathilde(ou le nom de votre système(jarvis,mégane,...)) +CODE de sécurité pour éviter que n'importe qui envoie un sms pour controler votre système puis d'un ;
ceci indique au système que le SMS recu est une série d'ordre pour Mathilde et non un sms basique qu'elle doit vocaliser.

ensuite :
un point virgule pour séparer chaque ordres

ex : Mathilde 0123456789;Mathilde il est quelle heure;Mathilde active l'alarme sonore;Mathilde une souris verte

type sms : 

Mathilde code point virgule Mathilde ordre point virgule ordre de votre choix

dans ce plug nvl version, vous pouvez envoyer 1 sms avec plusieurs commande 
AVEC ou SANS le mot Mathilde !!!!!!

ex pour alarme : 

pour l'enclencher vous dites : Mathilde enclenche l'alarme sonore

pour l'arreter  : Mathilde une souris verte


Donc le sms pour activer :

Mathilde 0123456789; Mathilde active l'alarme sonore

pour couper l'alarme, la phrase attendue est le code du xml

donc le SMS pour couper :

Mathilde 0123456789 ; Mathilde une souris verte


