@extends('layouts.app')

@section('content')
    <div class="container">
        <ul class="list-group">
            @foreach($posts as $post)
                <li class="list-group-item">
                    <a href="/news/{{$post->id}}">
                        {{$post->title}}
                    </a>
                </li>
            @endforeach
        </ul>

    </div>
@endsection