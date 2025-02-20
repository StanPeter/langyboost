import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactFlow, { Edge, Handle, Node, Position } from 'reactflow';
import 'reactflow/dist/style.css';

// Define the nodes
const initialNodes: Node[] = [
    {
        id: '1',
        position: { x: 250, y: 0 },
        data: { label: 'Basics' },
        style: { backgroundColor: '#3f51b5', color: '#fff', padding: 10, borderRadius: 5 },
    },
    {
        id: '2',
        position: { x: 100, y: 100 },
        data: { label: 'Basics II' },
        style: { backgroundColor: '#009688', color: '#fff', padding: 10, borderRadius: 5 },
    },
    {
        id: '3',
        position: { x: 400, y: 100 },
        data: { label: 'Basics III' },
        style: { backgroundColor: '#009688', color: '#fff', padding: 10, borderRadius: 5 },
    },
    {
        id: '4',
        position: { x: 50, y: 200 },
        data: { label: 'Advanced I' },
        style: { backgroundColor: '#8e44ad', color: '#fff', padding: 10, borderRadius: 5 },
    },
    {
        id: '5',
        position: { x: 250, y: 200 },
        data: { label: 'Advanced II' },
        style: { backgroundColor: '#8e44ad', color: '#fff', padding: 10, borderRadius: 5 },
    },
    {
        id: '6',
        type: 'course',
        position: { x: 450, y: 200 },
        data: { label: 'Advanced III', bgColor: '#8e44ad', disabled: false },
    },
];

// Define the edges with custom styles
const initialEdges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', style: { stroke: '#ff5722', strokeWidth: 2 } },
    { id: 'e1-3', source: '1', target: '3', style: { stroke: '#ff5722', strokeWidth: 2 } },
    { id: 'e3-4', source: '3', target: '4', style: { stroke: '#ff5722', strokeWidth: 2 } },
    { id: 'e3-5', source: '3', target: '5', style: { stroke: '#ff5722', strokeWidth: 2 } },
    { id: 'e3-6', source: '3', target: '6', style: { stroke: '#ff5722', strokeWidth: 2 } },
];

// Custom node component for round nodes
const CourseNode = ({ data }: { data: Node['data'] }) => {
    return (
        <div
            style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                backgroundColor: data.bgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                border: data.disabled ? '2px solid #ccc' : 'none',
                opacity: data.disabled ? 0.5 : 1,
                position: 'relative',
            }}
        >
            {/* Target handle on the left */}
            <Handle type="target" position={Position.Top} style={{ background: '#555' }} />
            {/* Source handle on the right */}
            <Handle type="source" position={Position.Bottom} style={{ background: '#555' }} />
            {data.label}
        </div>
    );
};
// Node types
const nodeTypes = {
    course: CourseNode,
};

const CourseLevelDetailGraph: React.FC = () => {
    const router = useRouter();
    
    useEffect(() => {
        // Select the attribution element
        const attributionElement = document.querySelector('.react-flow__panel.react-flow__attribution.bottom.right');

        // Hide the element if it exists
        if (attributionElement) {
            (attributionElement as HTMLElement).style.display = 'none';
        }
    }, []);

    return (
        <div style={{ width: '100%', height: '500px' }}>
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                nodeTypes={nodeTypes}
                onNodeClick={(event, node) => {
                    router.push(`/courses/level/${node.id}`);
                }}
                fitView
                nodesDraggable={false}
                zoomOnScroll={false}
                zoomOnDoubleClick={false}
                panOnScroll={false}
                panOnDrag={false}
            />
        </div>
    );
};

export default CourseLevelDetailGraph;
