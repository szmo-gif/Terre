# Spécifiez le chemin du fichier
chemin_du_fichier="nom_du_fichier.sh"

# Utilisez la commande basename pour extraire le nom du fichier
nom_du_fichier=$(basename "$chemin_du_fichier")

# Affichez le nom du fichier
echo  $nom_du_fichier
