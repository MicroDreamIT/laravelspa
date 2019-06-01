@extends('layouts.app')

@section('content')
<div class="container">
    <form action="/news" method="POST" class="form-horizontal">
        @csrf
        <div class="form-group">
            <label>title</label>
            <input type="text" class="form-control" name="title">
        </div>
        <div class="form-group">
            <label>description</label>
            <textarea class="form-control" name="description" rows="10" cols="10"></textarea>
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-success">
                submit
            </button>
        </div>
    </form>
</div>
@endsection