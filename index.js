//should return an array of nodes in the order they were visited
function bfs(rootNode, vertices, edges){
    rootNode = vertices[0]
      queue = []
      addVertexToQueue(rootNode)
          // queue = [rootNode]
      while(!queue.length == 0) {
          let firstNode = queue.shift()
      adjacentVertices = findAdjacentNodes(firstNode)
          for vertex in adjacentVertices {
              markDistanceAndPredecessor(vertex)
              addToQueue(vertex)
          }
      }
}

//should return an array of adjacent nodes
function findAdjacentNodes(node,  vertices, edges){
  return edges.filter(function(edge){
    return edge.includes(node)
  }).map(function(edge){

  }
}

//should return an array of adjacent nodes
function markDistanceAndPredecessor(predecessor, adjacentNodes){
  adjacentNodes.map(function(node){
    node.distance = predecessor.distance + 1;
    node.predecessor = predecessor;
  })
}

function addVertexToQueue(node){

}
