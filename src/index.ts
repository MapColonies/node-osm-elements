interface BaseElement {
  type: 'node' | 'way' | 'relation';
  id: number;
  timestamp?: string;
  version?: number;
  changeset?: number;
  user?: string;
  tags?: { [key: string]: string };
}

interface OsmNode extends BaseElement {
  type: 'node';
  lat: number;
  lon: number;
}

interface OmsWay extends BaseElement {
  type: 'way';
  nodes: OsmNode[];
}

interface OsmRelation extends BaseElement {
  type: 'relation';
  members?: BaseElement & { role?: string };
}

interface Changeset {
  type: 'changeset';
  version?: string;
  generator?: string;
  tags?: { [key: string]: string };
}

interface OsmChange {
  type: 'osmchange';
  version?: string;
  generator?: string;
  create?: BaseElement[];
  modify?: BaseElement[];
  delete?: BaseElement[];
}

export { BaseElement, OsmNode, OmsWay, OsmRelation, Changeset, OsmChange };
