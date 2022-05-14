We are going to take a look at kubernetes and how it works under the hood. 

First lets begin by taking a quick definition of what kubernetes is. Kubernetes is a technology that allows you to manage containerized workloads.

When you deploy Kubernetes you get a cluster. 

A cluster simply means a set of worker machines called nodes.

## Nodes

You can think of a node as computer that runs a something you tell it. It is managed by the control plane. A node does not directly run the service or the app you deployed. Within a node is contained a pod, in those pod the actual service is bein run. A node has 3 main components. 

- kubelet - It makes sure that containers are running in a Pod.
- kube-proxy - A network proxy that runs on each node in your cluster
- container runtime - Responsible for running containers

## Pods

Pods are the smallest things you can deploy in kubernetes. It is a group of one or more docker images called containers.

**Lifecycle**

Pods are assigned a unique ID, and scheduled to nodes where they remain until termination. Pods cannot be restarted if they fail, they are deleted and a new identical pod with silghtly differnet ID is spawned. 

#### Phases

- Pending - The pod awaits the containers to download and run.
- Running - The Pod has been bound to a node, and all of the containers have been created.
- Succeeded - All containers in the Pod have terminated in success, and will not be restarted.
- Failed - At least one container has terminated in failure
- Unknown - The state of the pod cannot be obtained.

## Control Plane

The control plane manages the nodes and the pods in the cluster.

**kube-apiserver**

The API server is a component of the Kubernetes control plane that exposes the Kubernetes API. The API server is the front end for the Kubernetes control plane.

**etcd**

etcd is a kvp (key-value-pair) store used to store configuration data, state data, and metadata. etcd uses Raft conesnus algorithm. Conesnus is to achieve overall system reliability in the presence of a number of faulty processes. This often requires coordinating processes to reach consensus, or agree on some data value that is needed during computation. We will go into more detail about Raft in another article.

**kube-scheduler**

Control plane component that watches for newly created Pods with no assigned node, and selects a node for them to run on.

**kube-controller-manager**

Runs controller processes using a control loop. A control loop is a process management system designed to maintain a process variable at a desired set point. Each step in the loop works in conjunction with the others to manage the system.