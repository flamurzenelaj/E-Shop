<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class AdminController extends Controller
{
    public function AdminLogout(Request $request){
        Auth::logout();
        return Redirect()->route('login');
    }

    public function UserProfile(){
        $adminData = User::find(1);
        return view('backend.admin.admin_profile', compact('adminData'));
    }

    public function UserProfileStore(Request $request){
        $data = User::find(1);
        $data->name = $request->name;
        $data->email = $request->email;

        if($request->file('profile_photo_path')){
            $file = $request->file('profile_photo_path');
            @unlink(public_path('upload/admin_images/'.$data->profile_photo_path));
            $filename = date('YmdHi').$file->getClientOriginalName();
            $file->move(public_path('upload/admin_images'),$filename);
            $data['profile_photo_path'] = $filename;
        }
        $data->save();
        $notification = array(
            'message' => 'User Profile Updated Successfully',
            'alert_type' => 'success',
        );
        return redirect()->route('user.profile')-with($notification);
    }
}
