How to get the service up and running

<!-- Build image -->
docker build -t YOUR_TAG_HERE .

<!-- Test container locally -->
docker run -p YOUR_PORT_HERE:3000 YOUR_TAG_HERE

<!-- Deployment in gcloud -->
<!-- Login -->
gcloud auth login

<!-- Create a cluster -->
gcloud container clusters create YOUR_CLUSTER_NAME_HERE

<!-- Create a deployment -->
kubectl apply -f deployment.yaml

<!-- Create a service -> Exposes it externally if the type is LoadBalancer-->
kubectl apply -f service.yaml

<!-- Create secrets -->
kubectl apply -f secrets.yaml

<!-- Optional -> Create a persistent volume -->
<!-- NB -> Disk must be in the same zone and VMs created -->
gcloud compute disks create --size=500GB --zone=ZONE_HERE DISK_NAME_HERE