import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'projects.json');

export async function GET() {
  try {
    const data = await fs.readFile(dataPath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const project = await request.json();
    const data = await fs.readFile(dataPath, 'utf8');
    const projects = JSON.parse(data);
    
    projects.push(project);
    
    await fs.writeFile(dataPath, JSON.stringify(projects, null, 2));
    return NextResponse.json({ success: true, project });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to save project' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedProject = await request.json();
    const data = await fs.readFile(dataPath, 'utf8');
    let projects = JSON.parse(data);
    
    projects = projects.map((p: any) => p.title === updatedProject.oldTitle ? updatedProject : p);
    delete updatedProject.oldTitle; // Remove helper field
    
    await fs.writeFile(dataPath, JSON.stringify(projects, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { title } = await request.json();
    const data = await fs.readFile(dataPath, 'utf8');
    const projects = JSON.parse(data);
    
    const filteredProjects = projects.filter((p: any) => p.title !== title);
    
    await fs.writeFile(dataPath, JSON.stringify(filteredProjects, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete project' }, { status: 500 });
  }
}
